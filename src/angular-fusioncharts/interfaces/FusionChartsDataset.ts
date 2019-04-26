

export type FusionChartsBoolean  boolean | 1 | 0 | '1' | '0' | 'true' | 'false';
export type FusionChartsDecimal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface FusionChartsDatasetChart {
  plotBorderThickness?: any;
  caption?: any;
  showAlternateHGridColor?: any;
  zeroPlaneThickness?: any;
  labelDisplay?: any;
  labelStep?: any;
  labelBinSize?: any;
  flatScrollBars?: any;
  scrollheight?: any;
  showLegend?: any;
  showLabels?: any;
  showValues?: any;
  paletteColors?: any;
  plotFillAngle?: any;
  plotGradientColor?: any;
  legendPosition?: any;
  legendNumColumns?: any;
  legendItemFont?: any;
  legendItemFontSize?: any;
  plotFillRatio?: any;
  legendBgColor?: any;
  toolTipPadding?: any;
  tooltipborderradius?: any;
  legendBorderAlpha?: any;
  legendShadow?: any;
  useroundedges?: any;
  use3DLighting?: any;
  showShadow?: any;
  pieRadius?: any;
  numvisibleplot?: any;
  numVisiblePlot?: any;
  usePlotGradientColor?: any;

  // Borders and Backgrounds --------------------------------------------------------------------

  /** By default, the chart borders are visible for 2D charts.
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/border-and-background
   */
  showBorder?: FusionChartsBoolean;
  /** Specify the hex code of the border color */
  borderColor?: string;
  /** Set the thickness of the border */
  borderThickness?: number;
  /** Set the transparency of the border */
  borderAlpha?: number;
  /** Set the hex code of the color of the background / the hex codes of the gradient colors separated by a comma
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/border-and-background
   */
  bgColor?: string;
  /** Set the transparency of the background */
  bgAlpha?: number | string;
  /** Set the radius of each color in the gradient */
  bgratio?: number | string;
  /** Set the angle in degrees of each color */
  bgAngle?: number;
  /** Specify an external image (GIF, JPEG or PNG only) as the background of the chart.  */
  bgImage?: string;
  /** Set the transparency level of the background image  */
  bgImageAlpha?: number;
  /** Specify a display mode using  */
  bgImageScale?: number;
  /** Set the alignment of the image */
  bgImageVAlign?: 'top' | 'middle' | 'bottom';
  /** Set the alignment of the image */
  bgImageHAlign?: 'top' | 'middle' | 'bottom';
  /** Increase or decrease the scale of the image  */
  bgImageDisplayMode?: 'stretch' | 'tile' | 'fit' | 'fill' | 'center' | 'none';

  // Canvas -------------------------------------------------------------------------------------

  /** Specify the hex code of the canvas background color  */
  canvasBgColor?: string;
  /** Set the transparency of the canvas background  */
  canvasBgAlpha?: number;
  /** Set the canvas background ratio in percentage for gradients separated by a comma  */
  canvasBgRatio?: string;
  /** Specify canvas background angle (in degrees) in case of a gradient. Valid range is `0` to `360`. */
  canvasBgAngle?: number;
  /** By default, the canvas border is not visible. To show the canvas border. */
  showCanvasBorder?: FusionChartsBoolean;
  /** Specify the hex code to set the border color  */
  canvasBorderColor?: string;
  /** Set the thickness of the border */
  canvasBorderThickness?: number;
  /** Set the transparency of the border */
  canvasBorderAlpha?: number;
  /**  to show the canvas background. */
  showCanvasBg?: FusionChartsBoolean;
  /**  to show the canvas base. */
  showCanvasBase?: FusionChartsBoolean;
  /** Specify the hex code of the base color  */
  canvasBaseColor?: string;
  /** Set the height of the canvas base  */
  canvasBaseDepth?: number;
  /** Set the depth of the canvas background  */
  canvasBgDepth?: number;


  // Fonts --------------------------------------------------------------------------------------

  /** Specify the font property of the text displayed on the chart
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/fonts
   */
  baseFont?: string;
  /** Set the size of the base font
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/fonts
   */
  baseFontSize?: number;
  /** Specify the hex code for the color of the base font
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/fonts
   */
  baseFontColor?: string;
  /** Specify the font property of the text displayed on the chart outside the canvas
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/fonts
   */
  outCnvBaseFont?: string;
  /** Set the size of the font outside the chart canvas
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/fonts
   */
  outCnvBaseFontSize?: number;
  /** Specify the hex code for the color of the font outside the chart canvas
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/fonts
   */
  outCnvBaseFontColor?: string;

  // Number Format ------------------------------------------------------------------------------

  /** To round off the decimals for all the numbers on the chart set the number of decimal places to which all the
   * numbers on the chart will be rounded off to using the decimals attribute. Valid range is from `0` to `10`.
   */
  decimals?: FusionChartsDecimal;
  /** You can also round off the decimal places for only the horizontal  div lines. */
  yAxisValueDecimals?: FusionChartsDecimal;
  /** You can also round off the decimal places for only the vertical div lines. */
  xAxisValueDecimals?: FusionChartsDecimal;
  /** add/retain the same number of trailing zeros after the decimal point to all figures on the chart. */
  forceDecimals?: FusionChartsBoolean;
  /** to add/retain the same number of trailing zeros after the decimal point to all Y-axis values on the chart. */
  forceYAxisValueDecimals?: FusionChartsBoolean;
  /** to add/retain the same number of trailing zeros after the decimal point to all X-axis values on the chart. */
  forceXAxisValueDecimals?: FusionChartsBoolean;
  /** to remove the commas in all the numbers on the chart. Note that this attribute will only work if you don't
   * specifically mention the `yFormatNumber` and `xFormatNumber` attributes.
   */
  formatNumber?: FusionChartsBoolean;
  /** to remove the commas in all the numbers on the Y-axis of the chart. */
  yFormatNumber?: FusionChartsBoolean;
  /** to remove the commas in all the numbers on the X-axis of the chart. */
  xFormatNumber?: FusionChartsBoolean;
  /** automatically add k (thousands) and M (millions) to a number after truncating and rounding it. Note that this
   * attribute will only work if you don't specifically mention the `yFormatNumberScale` and `xFormatNumberScale`
   * attributes.
   */
  formatNumberScale?: FusionChartsBoolean;
  /** automatically add k (thousands) and M (millions) to all the numbers on the Y-axis of the chart. */
  yFormatNumberScale?: FusionChartsBoolean;
  /** automatically add k (thousands) and M (millions) to all the numbers on the X-axis of the chart.t */
  xFormatNumberScale?: FusionChartsBoolean;
  /** Specify the character to be used as the decimal separator */
  decimalSeparator?: string;
  /** Specify the character to be used as the thousand separator */
  thousandSeparator?: string;
  /** Specify the character to be displayed as decimal separator, while leaving the actual character used for
   * calculations to the default value. This is useful if you follow the European number format, where a `,` (comma)
   * is used as the decimal separator, instead of the default `.` (dot).
   */
  inDecimalSeparator?: string;
  /** Specify the character to be displayed as thousand separator, while leaving the actual character used for
   * calculations to the default value. This is useful if you follow the European number format, where a `.` (dot) is
   * used as the thousand separator, instead of the default `,` (comma).
   */
  inThousandSeparator?: string;
  /** Specify the number of digits after which the thousand separator character should be placed. ie : `"2,3"` */
  thousandSeparatorPosition?: string;
  /** Specify the prefix for all the values on the chart */
  numberPrefix?: string;
  /** Specify the prefix for all the Y-axis values on the chart */
  yNumberPrefix?: string;
  /** Specify the prefix for all the X-axis values on the chart */
  xNumberPrefix?: string;
  /** Specify the suffix for all the values on the chart */
  numberSuffix?: string;
  /** Specify the suffix for all the Y-axis values on the chart */
  yNumberSuffix?: string;
  /** Specify the suffix for all the X-axis values on the chart */
  xNumberSuffix?: string;
  /** For dual y-axis charts */
  sNumberPrefix?: string;
  /** For dual y-axis charts */
  sNumberSuffix?: string;
  /** For dual y-axis charts */
  forceSYAxisValueDecimals?: string;
  /** Define the conversion ratio from one unit to the next unit */
  numberScaleValue?: string;
  /** Define the units of conversion from a lower unit to a higher unit  */
  numberScaleUnit?: string;
  scaleRecursively?: number;
  maxScaleRecursion?: number;

  // Tooltips -----------------------------------------------------------------------------------

  /** Show/Hide Tooltips
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/tool-tips
   */
  showToolTip?: FusionChartsBoolean;
  /** Tooltip : background alpha */
  toolTipBgAlpha?: number;
  /** Tooltip : display shadow */
  showToolTipShadow?: FusionChartsBoolean;
  /**How to use Tooltip Macros (with HTML)
   * @see : for macro https://www.fusioncharts.com/dev/chart-guide/chart-configurations/tool-tips
   */
  plotToolText?: string;
  /** Tooltip Macros for Trend Lines
   * @see : for macro https://www.fusioncharts.com/dev/chart-guide/chart-configurations/tool-tips
   */
  trendlineToolText?: string;
  /** Tooltip Macros for Map Connectors
   * @see : for macro https://www.fusioncharts.com/dev/chart-guide/chart-configurations/tool-tips
   */
  connectorToolText?: string;

  // Cross Line -----------------------------------------------------------------------------------

  /** Cross Line
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/cross-line
   */
  drawCrossLine?: FusionChartsBoolean;
  /** Cross Line Color */
  crosslinecolor?: string;
  /** Cross Line Opacity */
  crossLineAlpha?: number;
  /** Cross Line Enable/Disable Animation */
  crossLineAnimation?: FusionChartsBoolean;
  /** Cross Line animation duration */
  crossLineAnimationDuration?: number;
  /** Active Tooltip Background Color */
  plotColorinTooltip?: FusionChartsBoolean;
  /** Tooltip : attribute to specify the color of the unfocused plot in the tooltip */
  tooltipGrayOutColor?: string;
  /**  tooltip background color */
  toolTipBgColor?: string;
  /** hex code of the tooltip border color  */
  toolTipBorderColor?: string;
  /** thickness of the tooltip border  */
  toolTipBorderThickness?: number;
  /** Separator Character for Tooltip */
  toolTipSepChar?: string;
  /** Tooltip: Show/Hide Tooltip Shadow */
  showTooltipShadow?: FusionChartsBoolean;
}

export interface FusionChartsData {
  label: string;
  value: any;
  /** Display Multiline Tooltip Text Template (`<br>` == `{br}`) */

  // Vertical Lines --------------------------------------------------------------------

  /** Vertical Lines
   * @see : https://www.fusioncharts.com/dev/chart-guide/chart-configurations/vertical-lines
   */
  vline?: FusionChartsBoolean;
  tooltext?: string;
  linePosition: number;
  labelPosition: number;
  labelVAlign: 'top' | 'middle' | 'bottom';
  labelHAlign: 'left' | 'center' | 'right';
}

export interface FusionChartsDataset {
  chart: FusionChartsDatasetChart & { [key: string]: any };
  data?: (FusionChartsData & { [key: string]: any })[];
  categories?: any;
  dataset?: any;
}
