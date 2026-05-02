// ─── APEX Widget Task Handler ─────────────────────────────────────────────────

import React from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import { DailyThoughtWidget } from './src/widgets/DailyThoughtWidget';

const nameToWidget = {
  DailyThought: DailyThoughtWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      props.renderWidget(<Widget />);
      break;

    case 'WIDGET_UPDATE':
      // Re-render with the current day's quote
      props.renderWidget(<Widget />);
      break;

    case 'WIDGET_RESIZED':
      props.renderWidget(<Widget />);
      break;

    case 'WIDGET_DELETED':
      break;

    case 'WIDGET_CLICK':
      // clickAction="OPEN_APP" handles opening the app
      break;

    default:
      break;
  }
}
