"use client";
import classes from "./Tabs.module.scss";
import { ReactNode, useId, useRef, useState } from "react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import FilterCheckbox from "../FilterCheckbox";

export type TabItem = {
  id: number;
  title: string;
};

interface TabsProps {
  headers: TabItem[];
  color?: "primary" | "green" | null;
  
  setOnSaleActive?: (active: boolean) => void;
  onSaleActive?: boolean;
  children: ReactNode;
  className?: string;
  activeId: number | null;
  selectTab: (id: number) => void;
  classNames?: {
    wrapper?: string;
    body?: string;
    list?: string;
    item?: string;
    button?: string;
    content?: string;
  };
}

function Tabs({
  headers,
  children,
  classNames,
  className,
  activeId,
  onSaleActive,
  setOnSaleActive,
  selectTab,
  color,
}: TabsProps) {
  const listRef = useRef(null);
  const id = useId();

  return (
    <div className={clsx(classes.Tabs, className)}>
      <LayoutGroup id={`tab-layout-${id}`}>
        <div className={clsx(classes.body_tabs, classNames?.body)}>
          <ul ref={listRef} className={clsx(classes.List, classNames?.list)}>
            {headers.map(({ id, title }) => (
              <li key={id} className={clsx(classes.Item, classNames?.item)}>
                <button
                  className={clsx(
                    classes.Button,
                    classNames?.button,
                    activeId === id && color !== "green" && classes.Active,
                    activeId === id && color == "green" && classes.greenaActive
                  )}
                  onClick={(event) => {
                    selectTab(id);
                    const target: any = event.currentTarget;
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }}
                >
                  <span>{title}</span>
                  {activeId === id && (
                    <motion.div layoutId="tab-id" className={classes.Tracker} />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={clsx(classes.Content, classNames?.content)}>
          {children}
        </div>
      </LayoutGroup>
    </div>
  );
}

export default Tabs;
