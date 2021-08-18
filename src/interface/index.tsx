export interface BoxProps {
  title: string;
  values: BoxTextProps[];
}
export interface RadioBoxProps {
  title: string;
  values: RadioBoxTextProps[];
  type: number;
}
export interface RadioBoxTextProps {
  key1: string;
  key2: string;
  isLast?: boolean;
  type?: number;
}
export interface BoxTextProps {
  key1: string;
  value1: string;
  key2: string;
  value2: string;
  index?: number;
  value1Active: boolean;
  value2Active: boolean;
  isLast?: boolean;
}

export interface DirectoryBoxProps {
  title: string;
  image: string;
  subtitle: string;
  type: string;
  sector: string;
  expectedIRR: string;
  rargetRaise: string;
  assetGeography: string;
  indicationOfInterestby: string;
  investmentHorizon: string;
  introducedby: string;
  onClick?: () => void;
}
export interface ResearchBoxProps {
  title: string;
  image: string;
  subtitle: string;
  type: string;
  sector: string;
  expectedIRR: string;
  rargetRaise: string;
  assetGeography: string;
  indicationOfInterestby: string;
  investmentHorizon: string;
  introducedby: string;
}
export interface DirectoryBoxTextProps {
  key1: string;
  value1: string;
  key2: string;
  value2: string;
  isLast?: boolean;
  variant?: number;
}

export interface TimeLineItemProps {
  activeTab: number;
}
export interface TimelineTabProps {
  icon: string;
  title: string;
  subtitle: string;
  isActive: Boolean;
  onClick?: () => void;
}
export interface ActivityChartProps {
  value: number;
  title: string;
  email?: string;
  status: string;
  lastActitvy: string;
  tag?: string;
  color?: string;
  type?: number;
  onClick?: () => void;
}
export interface profileProps {
  img: string;
  title: string;
  LastActive: string;
  type?: number;
}
