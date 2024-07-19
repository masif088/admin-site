import Cookies from "js-cookie";

export class ConfigDB {
  static data = {
    settings: {
      layout_type: (typeof Cookies.get('layout_type')!="undefined")?Cookies.get('layout_type') as string:"ltr",
      layout_class: typeof Cookies.get('layout_class')!="undefined"?Cookies.get('layout_class') as string:"compact-wrapper",
      sidebar: {
        type: typeof Cookies.get('sidebar_type')!="undefined"?Cookies.get('sidebar_type') as string:"compact-wrapper",
        iconType: typeof Cookies.get('sidebar_iconType')!="undefined"?Cookies.get('sidebar_iconType') as string:"stroke-svg",
      },
      sidebar_setting: typeof Cookies.get('sidebar_setting')!="undefined"?Cookies.get('sidebar_setting') as string:"default-sidebar",
    },
    color: {
      primary_color: typeof Cookies.get('primary_color')!="undefined"?Cookies.get('primary_color') as string:"#7366ff",
      secondary_color: typeof Cookies.get('secondary_color')!="undefined"?Cookies.get('secondary_color') as string:"#f73164",
      mix_background_layout: typeof Cookies.get('mix_background_layout')!="undefined"?Cookies.get('mix_background_layout') as string:"light-only",
    },
  };
}
export default ConfigDB;
