import React, { FC } from 'react'
import styled from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ContainerProps } from '../../types'

/**
 * @module Container defined to handle base parameters(props) that will help to build more custom components.
 * @param {ContainerProps} ContainerProps
 */
export const Container = styled.View<ContainerProps>`
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}`};
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${ backgroundColor };` };
  ${({ color }) => color && `color: ${'white' };` };
  ${({ opacity }) => opacity && `opacity: ${opacity}`};
  ${({ overflow }) => overflow && `overflow: ${overflow};` };
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};` };
  ${({ position }) => position && `position: ${position};` };
  ${({ top }) => top && `top: ${top};` };
  ${({ right }) => right && `right: ${right};` };
  ${({ bottom }) => bottom && `bottom: ${bottom};` };
  ${({ left }) => left && `left: ${left};` };
  ${({ display }) => display && `display: ${display};` };
  ${({ flex }) => flex && `flex: ${flex};` };
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};` };
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};` };
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};` };
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};` };
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};` };
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};` };
  ${({ width }) => width && `width: ${width};` };
  ${({ height }) => height && `height: ${height};` };
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};` };
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};` };
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};` };
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};` };
`

/**
 * @module SAContainer wrapped containers that includes the base padding width safeArea measures
 * @param {ContainerProps} ContainerProps
 */
export const SAContainer: FC<ContainerProps> = ({
	children,
	backgroundColor,
	flexDirection = 'column',
	justifyContent = 'space-between'
}) => {
	const insets = useSafeAreaInsets()

	return (
	<Container backgroundColor={backgroundColor} flex='1' paddingTop={`${insets.top}px`} paddingBottom={`${insets.bottom}px`}>
		<Container flex='1' flexDirection={flexDirection} justifyContent={justifyContent}>
		  {children}
		</Container>
	</Container>
	)
}