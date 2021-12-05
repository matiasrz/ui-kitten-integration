/**
 * Interface for component's props that represent margin in objects.
 * @interface MarginProps
 */
 export interface MarginProps {
    marginTop?: string,
    marginRight?: string,
    marginBottom?: string,
    marginLeft?: string,
    margin?: string,
}

/**
 * Interface for component's props that represent padding in objects.
 * @interface PaddingProps
 */
 export interface PaddingProps {
    paddingTop?: string,
    paddingRight?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    padding?: string,
}

/**
 * Interface for component's props that represent distance from sides(top, right, bottom & left) in objects.
 * @interface PositionProps
 */
 export interface PositionProps {
    position?: string,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
    zIndex?: string
}

/**
 * Interface for component's props that represent flex position in Object.
 * @interface FlexProps
 */
 export interface FlexProps {
    display?: string,
    flex?: string,
    flexDirection?: string,
    flexWrap?: string,
    flexShrink?: string,
    justifyContent?: string,
    alignItems?: string,
    alignSelf?: string,
}

/**
 * Interface for component's props that represent flex position in Object.
 * @interface ShapeProps
 */
 export interface ShapeProps {
    width?: string,
    height?: string,
    borderRadius?: string,
    borderColor?: string,
    borderWidth?: string
}

/**
 * Interface for component's props that represent Text.
 * @interface TextProps
 */
 export interface TextProps extends MarginProps, PaddingProps {
    color?: string
    fontSize?: string,
    fontWeight?: string | number,
    textAlign?: string,
    lineHeight?: string,
    decoration?: boolean
}

/**
 * Interface for component's props that represent color parameters.
 * @interface ColorProps
 */
export interface ColorProps {
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
    border?: string,
    opacity?: string
}

/**
 * Interface for component's props that represent Container.
 * @interface ContainerProps
 */
export interface ContainerProps extends MarginProps, PaddingProps,
    PositionProps, FlexProps, ShapeProps, ColorProps 
{
    overflow?: string,
    textAlign?: string,
    fontSize?: string,
    onPress?: () => void
}

/**
 * Interface for component's props that represent Container.
 * @interface SpacerProps
 */
export interface SpacerProps extends MarginProps, PaddingProps, ShapeProps {}