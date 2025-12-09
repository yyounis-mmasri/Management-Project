import { useEffect, useRef, useState } from "react";

interface TabIndicatorStyle {
  left: number;
  width: number;
}

interface UseTabIndicatorOptions {
  activeTab: string;
  tabs: Array<{ id: string; label: string }>;
}

export const useTabIndicator = ({
  activeTab,
  tabs,
}: UseTabIndicatorOptions) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<TabIndicatorStyle>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  // Helper function to set tab ref
  const setTabRef = (index: number) => (el: HTMLButtonElement | null) => {
    tabRefs.current[index] = el;
  };

  return { tabRefs, indicatorStyle, setTabRef };
};
