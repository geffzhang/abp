/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, style } from '@angular/animations';
/** @type {?} */
export var fadeIn = animation([style({ opacity: '0' }), animate('{{ time}} {{ easing }}', style({ opacity: '1' }))], {
  params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
export var fadeOut = animation([style({ opacity: '1' }), animate('{{ time}} {{ easing }}', style({ opacity: '0' }))], {
  params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
export var fadeInDown = animation(
  [
    style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeInUp = animation(
  [
    style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeInLeft = animation(
  [
    style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeInRight = animation(
  [
    style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeOutDown = animation(
  [
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeOutUp = animation(
  [
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeOutLeft = animation(
  [
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
/** @type {?} */
export var fadeOutRight = animation(
  [
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
  ],
  { params: { time: '350ms', easing: 'ease', transform: '' } },
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS5hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9mYWRlLmFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVoRSxNQUFNLEtBQU8sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDckgsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0NBQzFDLENBQUM7O0FBRUYsTUFBTSxLQUFPLE9BQU8sR0FBRyxTQUFTLENBQzlCLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDckYsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUM5Qzs7QUFFRCxNQUFNLEtBQU8sVUFBVSxHQUFHLFNBQVMsQ0FDakM7SUFDRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDO0lBQ3ZFLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxDQUFDLENBQUM7Q0FDeEcsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FDN0Q7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBRyxTQUFTLENBQy9CO0lBQ0UsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQztJQUN0RSxPQUFPLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO0NBQ3hHLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzdEOztBQUVELE1BQU0sS0FBTyxVQUFVLEdBQUcsU0FBUyxDQUNqQztJQUNFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGtDQUFrQyxFQUFFLENBQUM7SUFDdEUsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLCtCQUErQixFQUFFLENBQUMsQ0FBQztDQUN4RyxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUM3RDs7QUFFRCxNQUFNLEtBQU8sV0FBVyxHQUFHLFNBQVMsQ0FDbEM7SUFDRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDO0lBQ3ZFLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxDQUFDLENBQUM7Q0FDeEcsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FDN0Q7O0FBRUQsTUFBTSxLQUFPLFdBQVcsR0FBRyxTQUFTLENBQ2xDO0lBQ0UsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQztJQUNuRSxPQUFPLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQyxDQUFDO0NBQzNHLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzdEOztBQUVELE1BQU0sS0FBTyxTQUFTLEdBQUcsU0FBUyxDQUNoQztJQUNFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLCtCQUErQixFQUFFLENBQUM7SUFDbkUsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLG1DQUFtQyxFQUFFLENBQUMsQ0FBQztDQUM1RyxFQUNELEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUM3RDs7QUFFRCxNQUFNLEtBQU8sV0FBVyxHQUFHLFNBQVMsQ0FDbEM7SUFDRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxDQUFDO0lBQ25FLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7Q0FDM0csRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FDN0Q7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBRyxTQUFTLENBQ25DO0lBQ0UsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQztJQUNuRSxPQUFPLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDO0NBQzVHLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgYW5pbWF0aW9uLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZmFkZUluID0gYW5pbWF0aW9uKFtzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSwgYW5pbWF0ZSgne3sgdGltZX19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pKV0sIHtcbiAgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZhZGVPdXQgPSBhbmltYXRpb24oXG4gIFtzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSwgYW5pbWF0ZSgne3sgdGltZX19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKV0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnIH0gfSxcbik7XG5cbmV4cG9ydCBjb25zdCBmYWRlSW5Eb3duID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVZKC0yMHB4KScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVkoMCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVJblVwID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVZKDIwcHgpJyB9KSxcbiAgICBhbmltYXRlKCd7eyB0aW1lIH19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgwKScgfSkpLFxuICBdLFxuICB7IHBhcmFtczogeyB0aW1lOiAnMzUwbXMnLCBlYXNpbmc6ICdlYXNlJywgdHJhbnNmb3JtOiAnJyB9IH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZmFkZUluTGVmdCA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWCgyMHB4KScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVgoMCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVJblJpZ2h0ID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVYKC0yMHB4KScgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHRyYW5zbGF0ZVgoMCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVPdXREb3duID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVZKDApJyB9KSxcbiAgICBhbmltYXRlKCd7eyB0aW1lIH19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgyMHB4KScgfSkpLFxuICBdLFxuICB7IHBhcmFtczogeyB0aW1lOiAnMzUwbXMnLCBlYXNpbmc6ICdlYXNlJywgdHJhbnNmb3JtOiAnJyB9IH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZmFkZU91dFVwID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVZKDApJyB9KSxcbiAgICBhbmltYXRlKCd7eyB0aW1lIH19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWSgtMjBweCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVPdXRMZWZ0ID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVYKDApJyB9KSxcbiAgICBhbmltYXRlKCd7eyB0aW1lIH19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWCgyMHB4KScgfSkpLFxuICBdLFxuICB7IHBhcmFtczogeyB0aW1lOiAnMzUwbXMnLCBlYXNpbmc6ICdlYXNlJywgdHJhbnNmb3JtOiAnJyB9IH0sXG4pO1xuXG5leHBvcnQgY29uc3QgZmFkZU91dFJpZ2h0ID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSB0cmFuc2xhdGVYKDApJyB9KSxcbiAgICBhbmltYXRlKCd7eyB0aW1lIH19IHt7IGVhc2luZyB9fScsIHN0eWxlKHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd7eyB0cmFuc2Zvcm0gfX0gdHJhbnNsYXRlWCgtMjBweCknIH0pKSxcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScsIHRyYW5zZm9ybTogJycgfSB9LFxuKTtcbiJdfQ==
