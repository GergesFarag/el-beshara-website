export interface IServiceStat {
  label: string;
  value: string;
}

export interface IServiceAction {
  text: string;
  href: string;
}

export interface IService {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  points: string[];
  statistics: IServiceStat[];
  action: IServiceAction;
}
