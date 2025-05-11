import classes from "./FilterCheckbox.module.scss";

interface FilterProps {
  setOnSaleActive?: (active: boolean) => void;
  onSaleActive?: boolean;
  text?: string;
}
const FilterCheckbox = ({
  setOnSaleActive,
  onSaleActive,
  text,
}: FilterProps) => {
  return (
    <>
      {onSaleActive != null ? (
        <div className={classes.filter_item}>
          <label htmlFor="onSale" className={classes.item_label}>
            <input
              className={classes.item_input}
              id="onSale"
              name="onSale"
              type="checkbox"
              required
              checked={onSaleActive}
              onChange={() => setOnSaleActive && setOnSaleActive(!onSaleActive)}
            />
            <span className={classes.filter_fake}></span>
            <div className={classes.text_body}>
              <span className={classes.filter_text}>
                {text ? text : "показывать только"}
              </span>
              <span className={classes.filter_title}>
                {text ? text : "Новостройки в продаже"}
              </span>
            </div>
          </label>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterCheckbox;
