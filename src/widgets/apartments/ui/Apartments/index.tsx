import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import classes from './apartments.module.scss';
import { SearchBarMain } from '@widgets/searchBar/ui/SearchBarMain';
import { Wrapper } from '@shared/ui/Wrapper';
import { ApartmentsItems } from '../ApartmentsItems';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import { getFetcher } from '@shared/api/fetcher/getFetcher';
import { IProjectCard, IResidences, IResidencesData } from '@widgets/projects/model/IProjectCard';
import { IStatus } from '@widgets/searchBar';
import useTranslation from 'next-translate/useTranslation';
import { Pagination } from '@shared/ui/Pagination';

interface Props {
  apartments?: IResidences[];
  residences?: IProjectCard[];
  status?: IStatus[];
}

export const Apartments = ({ apartments, residences, status }: Props) => {
  const searchParams = useSearchParams();
  const { t } = useTranslation('common');
  
  const [activeRoom, setActiveRoom] = useState<number>(0);
  const [activeComplext, setActiveComplext] = useState<number>(0);
  const [activeStatus, setActiveStatus] = useState<number>(0);
  const [lowerValue, setLowerValue] = useState<number>(0);
  const [upperValue, setUpperValue] = useState<number>(356000);
  const [pageIndex, setPageIndex] = useState<number>(
    searchParams.get("page") ? Number(searchParams.get("page")) - 1 : 0
  );

  useEffect(() => {
    setActiveRoom(Number(searchParams.get("room_count")) || 1);
    setActiveComplext(Number(searchParams.get("residence_id")) || 0);
    setLowerValue(Number(searchParams.get("price_min")) || 0);
    setUpperValue(Number(searchParams.get("price_max")) || 356000);
    setActiveStatus(Number(searchParams.get("status")) || 0);
  }, [searchParams]);

  const buildUrl = useCallback(() => {
    let url = `/residences/filter/?page=${pageIndex + 1}&per_page=10`;

    if (activeRoom) url += `&room_count=${activeRoom}`;
    if (activeComplext) url += `&residence_id=${activeComplext}`;
    if (lowerValue) url += `&price_min=${lowerValue}`;
    if (upperValue) url += `&price_max=${upperValue}`;
    if (activeStatus) url += `&status=${activeStatus}`;

    return url;
  }, [activeRoom, activeComplext, lowerValue, upperValue, activeStatus, pageIndex]);

  // Запрос данных
  const { data, isLoading, isError, isFetching } = useQuery<IResidences[]>(
    ['apartments' + lowerValue + upperValue + activeRoom + activeComplext + activeStatus + pageIndex],
    () => getFetcher(buildUrl())
  );

  const handlePageClick = (event: { selected: number }) => {
		setPageIndex(event.selected)
	}
  if (isError) {
    return <div>Ошибка при загрузке данных об апартаментах.</div>;
  }



  return (
    <Wrapper className={classes.wrapper}>
      <Breadcrumbs
        className={classes.breadcrumbs}
        items={[{ label: t('apartments'), isActive: true }]}
        includeHome
      />
      <SearchBarMain status={status} residences={residences} />
      <ApartmentsItems apartments={data} isFetching={isFetching} />
      {/* <div className={classes.bottom}>
					<Pagination
						type={2}
						forcePage={pageIndex}
						handlePageClick={handlePageClick}
						pageCount={data?.meta?.last_page || 1}
					/>
				</div> */}
    </Wrapper>
  );
};
