export interface SvgType extends React.SVGAttributes<SVGElement> {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

export enum SvgSizeInSQR {
  PRIMARY = 20,
}
