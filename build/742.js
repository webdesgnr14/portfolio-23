	will-change: opacity, transform;
`,Vw=(0,iN.ZP)(sN.animated.path)`
	stroke-dasharray: 65 66;
	will-change: stroke-dashoffset;
`,Mw=iN.ZP.div`
	${eN.aj};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	.${vw} {
		height: 1em;
		width: 1em;
		display: block;
	}
`;function Cw(c,e=2){const[a]=(0,sN.useTrail)(e,(a=>({from:{strokeDashoffset:66},strokeDashoffset:0,config:a===e-1?c.springConfigSlow:{...c.springConfigGeneral,clamp:!0}})));return[a,(0,sN.useSpring)({from:{opacity:0,transform:"translate(0px, 0px)"},opacity:1,transform:"translate(2px, 2px)",config:c.springConfigSlow,delay:500})]}function gw(c){const{colorfulBg:e}=c,a=(0,iN.Fg)(),[t,s]=Cw(a,2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:vw},{children:[(0,i.jsx)(Hw,{style:s,stroke:e?a.successBackgroundColor:a.successColor,fill:e?a.successColor:a.successBackgroundColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"0",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[1].strokeDashoffset,stroke:e?a.successBackgroundColor:a.successColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",fill:"none",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[0].strokeDashoffset,stroke:e?a.successBackgroundColor:a.successColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",fill:"none",d:"M8.25 9.5L10.75 12L15.75 7"},void 0)]}),void 0)},void 0)}function bw(c){const{colorfulBg:e}=c,a=(0,iN.Fg)(),[t,s]=Cw(a,3);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:vw},{children:[(0,i.jsx)(Hw,{style:s,stroke:e?a.warningBackgroundColor:a.warningColor,fill:e?a.warningColor:a.warningBackgroundColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"0",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[2].strokeDashoffset,stroke:e?a.warningBackgroundColor:a.warningColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",fill:"none",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[0].strokeDashoffset,stroke:e?a.warningBackgroundColor:a.warningColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",d:"M11.99 13H12.01"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[1].strokeDashoffset,stroke:e?a.warningBackgroundColor:a.warningColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",d:"M12 6V10"},void 0)]}),void 0)},void 0)}function Lw(c){const{colorfulBg:e}=c,a=(0,iN.Fg)(),[t,s]=Cw(a,3);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:vw},{children:[(0,i.jsx)(Hw,{style:s,stroke:e?a.errorBackgroundColor:a.errorColor,fill:e?a.errorColor:a.errorBackgroundColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"0",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[2].strokeDashoffset,stroke:e?a.errorBackgroundColor:a.errorColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",fill:"none",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[0].strokeDashoffset,stroke:e?a.errorBackgroundColor:a.errorColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",d:"M14.5 7L9.5 12"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[1].strokeDashoffset,stroke:e?a.errorBackgroundColor:a.errorColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",d:"M9.5 7L14.5 12"},void 0)]}),void 0)},void 0)}function xw(c){const{colorfulBg:e}=c,a=(0,iN.Fg)(),[t,s]=Cw(a,3);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:vw},{children:[(0,i.jsx)(Hw,{style:s,stroke:e?a.primaryBackgroundColor:a.primaryLightColor,fill:e?a.primaryLightColor:a.primaryBackgroundColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"0",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[2].strokeDashoffset,stroke:e?a.primaryBackgroundColor:a.primaryLightColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",fill:"none",d:"M14.5 2H9.5C5.36 2 2 5.36 2 9.5C2 12.76 4.09 15.53 7 16.56V22L12 17H14.5C18.64 17 22 13.64 22 9.5C22 5.36 18.64 2 14.5 2Z"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[0].strokeDashoffset,stroke:e?a.primaryBackgroundColor:a.primaryLightColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",d:"M16.99 13H17"},void 0),(0,i.jsx)(Vw,{strokeDashoffset:t[1].strokeDashoffset,stroke:e?a.primaryBackgroundColor:a.primaryLightColor,strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"1",d:"M12.99 13H13"},void 0)]}),void 0)},void 0)}function yw(c){const{colorfulBg:e,type:a,className:t}=c;return(0,i.jsx)(Mw,Object.assign({className:(0,eN.Q)(zw,{[`type-${a}`]:!0,colorfulBg:e},t)},{children:"error"===a?(0,i.jsx)(Lw,{colorfulBg:e},void 0):"warning"===a?(0,i.jsx)(bw,{colorfulBg:e},void 0):"success"===a?(0,i.jsx)(gw,{colorfulBg:e},void 0):(0,i.jsx)(xw,{colorfulBg:e},void 0)}),void 0)}const Nw="wpeform-component-actionfeedback",ww=(0,eN.ai)(Nw,"title"),Sw=(0,eN.ai)(Nw,"content"),kw=(0,eN.ai)(Nw,"footer"),Aw=(0,eN.ai)(Nw,"icon"),Ew=iN.ZP.div`
	font-size: ${c=>(0,eN.X)(1.25*c.theme.fz.large8)};
	margin: 0 0 ${c=>(0,eN.X)(2*c.theme.gutter)} 0;
	will-change: opacity, transform;
	display: flex;
`,Tw=(0,iN.ZP)(sN.animated.h3)`
	color: ${c=>c.theme.headingColor};
	font-size: ${c=>(0,eN.X)(c.theme.fz.large3)};
	font-weight: bold;
	margin: 0 0 ${c=>(0,eN.X)(c.theme.gutter)} 0;
	line-height: 1.2;
	will-change: opacity, transform;
`,Ow=(0,iN.ZP)(sN.animated.article)`
	${eN.aV};
	will-change: opacity, transform;
`,Fw=(0,iN.ZP)(sN.animated.footer)`
	color: ${c=>c.theme.textColorSecondary};
	font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
	margin: ${c=>(0,eN.X)(c.theme.gutter)} 0 0 0;
	will-change: opacity, transform;
`,_w=iN.ZP.aside`
	${eN.aj};
	margin: ${c=>(0,eN.X)(c.theme.gutter)} 0;
	padding: 0 ${c=>(0,eN.X)(c.theme.gutter)};

	&.${Nw}--size-tablet {
		${Ew} {
			font-size: ${c=>(0,eN.X)(1.5*c.theme.fz.large8)};
		}
		${Tw} {
			font-size: ${c=>(0,eN.X)(c.theme.fz.large4)};
		}
	}
`;function Dw(c){const{type:e,title:a,children:t,className:s,scrollOnMount:n=!0,scrollOffset:r=-100,footer:o}=c,l=(0,iN.Fg)(),[f]=(0,sN.useTrail)(o?3:2,(c=>({from:{opacity:0,transform:"translate(0px, 20px)"},opacity:1,transform:"translate(0px, 0px)",config:0===c?l.springConfigGeneral:l.springConfigSlow,delay:500}))),h=(0,eN.aS)((0,eN.af)(),Nw,{[`type-${e}`]:!0},s),m=(0,HM.useRef)(!0),u=(0,HM.useRef)(null);return(0,HM.useLayoutEffect)((()=>{m.current&&(m.current=!1,n&&u.current&&(0,eN.aT)(u.current,{verticalOffset:r,cancelOnUserAction:!0,elementToScroll:(0,eN.aU)(u.current)[0]}))}),[n,r]),(0,i.jsxs)(_w,Object.assign({className:h,ref:u},{children:[(0,i.jsx)(Ew,Object.assign({className:Aw},{children:(0,i.jsx)(yw,{type:e,colorfulBg:!1},void 0)}),void 0),(0,i.jsx)(Tw,Object.assign({style:f[0],className:ww},{children:a}),void 0),(0,i.jsx)(Ow,Object.assign({style:f[1],className:Sw},{children:t}),void 0),o?(0,i.jsx)(Fw,Object.assign({style:f[2],className:kw},{children:o}),void 0):null]}),void 0)}const jw="wpeform-component-control-group",Iw=iN.ZP.div`
	flex: 0 0 100%;
	padding: 0 0 0 ${c=>(0,eN.X)(c.theme.gutter/2)};
`,Pw=iN.ZP.div`
	color: ${c=>c.theme.headingColor};
	font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
	font-weight: ${c=>c.theme.boldHeading?"bold":"normal"};
	margin: 0 0 ${c=>(0,eN.X)(c.theme.gutter/2)} 0;
	flex: 0 0 100%;
	text-align: left;
	padding: 0 ${c=>(0,eN.X)(c.theme.gutter/2)};
`,Rw=iN.ZP.div`
	padding: ${c=>(0,eN.X)(1.2*c.theme.gutter)} 0;
	position: relative;
	margin: 0;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;

	&::before,
	&::after {
		content: '';
		position: absolute;
		display: block;
		height: 1px;
		border-radius: 2px;
		left: 0;
		right: 0;
		background-color: ${c=>c.theme.borderColorLight};
		transition: ${c=>(0,eN.Z)(["background-color"],c.theme.transitionControl)};
	}
	&::after {
		bottom: -1px;
	}
	&::before {
		top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	&:focus {
		&::after,
		&::before {
			background-color: ${c=>c.theme.primaryColor};
		}
		&::after {
			bottom: 0;
		}
	}
`,Bw=iN.ZP.div`
	padding: 0 ${c=>(0,eN.X)(.75*c.theme.gutter)};
	// Alignments
	&.${jw}--alignment-CENTER {
		${Pw} {
			text-align: center;
		}
	}
	&.${jw}--alignment-RIGHT {
		${Pw} {
			text-align: right;
		}
	}

	// LAYOUT
	&.${jw}--layout-HORIZONTAL {
		&.${jw}--size-tablet {
			${Iw} {
				flex: 0 0
					calc(100% - ${c=>(0,eN.X)(200+c.theme.gutter)});
				margin-left: auto;
			}
			${Pw} {
				flex: 0 0 200px;
				margin: 0;
			}
		}
	}
	&.${jw}--layout-INLINE {
		${Pw} {
			position: absolute;
			font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
			color: ${c=>c.theme.textColorSecondary};
			top: ${c=>(0,eN.X)(.25*c.theme.gutter)};
			left: 0;
		}
	}

	> *:last-child {
		${Rw} {
			&::after {
				display: none;
			}
		}
	}
	> *:first-child {
		${Rw} {
			&::before {
				display: none;
			}
		}
	}
`;function $w(c){const{className:e,layout:a=eN.t.VERTICAL,alignment:t=eN.s.LEFT,children:s}=c,n=(0,eN.aS)((0,eN.af)(),jw,{[`layout-${a}`]:!0,[`alignment-${t}`]:!0},e);return(0,i.jsx)(Bw,Object.assign({className:n},{children:s}),void 0)}$w.Item=Rw,$w.Heading=Pw,$w.Control=Iw;const qw="wpeform-component-inlinecountdown";function Uw(c){const{time:e,onDone:a}=c,t=(0,eN.aL)(e,a),{hours:s,minutes:n,seconds:r}=(0,eN.aW)(1e3*t,"number");return(0,i.jsxs)("span",Object.assign({className:qw},{children:[s>0?(0,eN.ab)((0,eN.aX)("%d hour, ","%d hours, ",s,"wp-eform"),s):null,s>0||n>0?(0,eN.ab)((0,eN.aX)("%d minute, ","%d minutes, ",n,"wp-eform"),n):null,(0,eN.ab)((0,eN.aX)("%d second","%d seconds",r,"wp-eform"),r)]}),void 0)}const Zw="wpeform-component-math-output",Qw=(0,eN.ai)(Zw,"label"),Xw=(0,eN.ai)(Zw,"output"),Ww=(0,eN.ai)(Zw,"prefix"),Gw=(0,eN.ai)(Zw,"suffix");(0,eN.ai)(Zw,"value-output");const Yw=iN.ZP.div`
	flex: 0 1 auto;
	color: ${c=>c.theme.textColor};
	font-weight: ${c=>c.theme.boldHeading?"bold":"normal"};
`,Kw=iN.ZP.output`
	flex: 0 0 140px;
	width: 140px;
	text-align: right;
	margin-left: ${c=>(0,eN.X)(c.theme.gutter/2)};
`,Jw=iN.ZP.span`
	font-variant-numeric: tabular-nums;
	font-weight: bold;
	color: ${c=>c.theme.headingColor};
`,cS=iN.ZP.span`
	color: ${c=>c.theme.textColorSecondary};
`,eS=iN.ZP.span`
	color: ${c=>c.theme.textColorSecondary};
`,aS=iN.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	padding: 0;

	&.${Zw}--appearance-table {
		padding: ${c=>(0,eN.X)(c.theme.gutter/2)};
		border-top: 1px solid ${c=>c.theme.borderColorSplit};
		border-bottom: 1px solid ${c=>c.theme.borderColorSplit};
	}

	&.${Zw}--appearance-highlighted {
		${Yw} {
			flex-basis: calc(
				100% - ${c=>(0,eN.X)(140+c.theme.controlHeightBase)}
			);
			max-width: calc(
				100% - ${c=>(0,eN.X)(140+c.theme.controlHeightBase)}
			);
		}
		${Kw} {
			flex-basis: ${c=>(0,eN.X)(140+c.theme.gutter)};
			width: ${c=>(0,eN.X)(140+c.theme.gutter)};
			padding: 0 ${c=>(0,eN.X)(c.theme.gutter/2)};
			background-color: ${c=>c.theme.primaryColor};
			height: ${c=>(0,eN.X)(c.theme.controlHeightBase)};
			line-height: ${c=>(0,eN.X)(c.theme.controlHeightBase)};
			border-top-right-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
			border-bottom-right-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
			position: relative;

			&::before {
				position: absolute;
				display: block;
				content: '';
				height: ${c=>(0,eN.X)(c.theme.controlHeightBase/Math.sqrt(2))};
				width: ${c=>(0,eN.X)(c.theme.controlHeightBase/Math.sqrt(2))};
				left: ${c=>(0,eN.X)(c.theme.controlHeightBase/Math.sqrt(2)/-2)};
				top: ${c=>(0,eN.X)((c.theme.controlHeightBase-c.theme.controlHeightBase/Math.sqrt(2))/2)};
				background-color: ${c=>c.theme.primaryColor};
				transform: rotate(-45deg);
				transform-origin: center center;
				border-top-left-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
			}

			${Jw},
			${cS},
			${eS} {
				color: ${c=>c.theme.primaryBgText};
				position: relative;
				z-index: 10;
			}
		}
	}
`,iS=iN.ZP.div`
	${Yw} {
		font-weight: normal;
	}
	> ${aS}, > * ${aS} {
		padding: ${c=>(0,eN.X)(c.theme.gutter/2)};
	}
	> ${aS}.${Zw}--appearance-highlighted,
		> *
		${aS}.${Zw}--appearance-highlighted {
		padding-right: 0;
	}
	> ${aS} + ${aS}, > * + * ${aS} {
		border-top: 0 none;
	}
`;function tS(c){const{value:e,appearance:a="simple",prefix:t=null,suffix:s=null,precision:n=2,thousandsSeparator:r=",",decimalSeparator:o=".",className:l,label:f}=c,h=(0,eN.aY)("slow"),[m,u]=(0,HM.useState)((()=>(0,eN.aZ)(0,n,o,r)));return(0,sN.useSpring)({from:{value:0},to:{value:e},config:h,onChange({value:c}){u((0,eN.aZ)(c.value,n,o,r))}}),(0,i.jsxs)(aS,Object.assign({className:(0,eN.Q)(Zw,{[`appearance-${a}`]:!0},l)},{children:[(0,i.jsx)(Yw,Object.assign({className:Qw},{children:f}),void 0),(0,i.jsxs)(Kw,Object.assign({className:Xw},{children:[t?(0,i.jsx)(cS,Object.assign({className:Ww},{children:t}),void 0):null,(0,i.jsx)(Jw,{children:m},void 0),s?(0,i.jsx)(eS,Object.assign({className:Gw},{children:s}),void 0):null]}),void 0)]}),void 0)}tS.Group=iS;const sS="wpeform-component-progressbar",nS=(0,eN.ai)(sS,"bar"),rS=iN.F4`
	0% {
			width: 0;
			opacity: 0.1;
	}
	20% {
			width: 0;
			opacity: 0.5;
	}
	100% {
			width: 100%;
			opacity: 0;
	}
`,oS=(0,iN.ZP)(sN.animated.div)`
	will-change: width;
	background-color: ${c=>c.theme.primaryColor};
	height: ${c=>(0,eN.X)(.25*c.theme.controlHeightBase)};
	position: relative;

	&.${nS}--is-active {
		&::before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: ${c=>c.theme.primaryBgText};
			opacity: 0;
			animation: ${rS} 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
			content: '';
		}
	}
`,lS=(0,iN.ZP)(sN.animated.span)`
	margin: 0;
	padding: 0;
	color: ${c=>c.theme.textColorSecondary};
	font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
	line-height: 1;
	font-weight: bold;
	position: absolute;
	right: 0.2em;
`,fS=iN.ZP.div`
	height: ${c=>(0,eN.X)(.25*c.theme.controlHeightBase)};
	background-color: ${c=>(0,eN.L)(.05,c.theme.disabledColor)};
	overflow: hidden;
	width: 100%;
`,hS=iN.ZP.div`
	${eN.aj};
	position: relative;

	/** Rounded corners */
	&.${sS}--is-bottom-rounded {
		${fS} {
			border-bottom-left-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
			border-bottom-right-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
		}
	}
	&.${sS}--is-top-rounded {
		${fS} {
			border-top-left-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
			border-top-right-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
		}
	}
	&.${sS}--is-bottom-rounded.${sS}--is-top-rounded {
		${fS},
		${oS},
		${oS}::before {
			border-radius: ${c=>(0,eN.X)(.25*c.theme.controlHeightBase)};
		}
	}

	/** Label positions */
	&.${sS}--label-position-top {
		${lS} {
			top: -1.2em;
		}
	}
	&.${sS}--label-position-bottom {
		${lS} {
			bottom: -1.2em;
		}
	}
`;function mS(c){const{width:e,active:a=!1,isBottomRounded:t=!1,isTopRounded:s=!1,showLabel:n=!0,precision:r=2,labelPosition:o="top"}=c,l=(0,iN.Fg)(),f=(0,sN.useSpring)({from:{width:"0%"},to:{width:`${e}%`},config:{...l.springConfigSlow,clamp:!0}}),h=(0,sN.useSpring)({number:e,from:{number:0},config:{...l.springConfigSlow,clamp:!0}});return(0,i.jsxs)(hS,Object.assign({className:(0,eN.Q)(sS,{"is-bottom-rounded":t,"is-top-rounded":s,"is-active":a,[`label-position-${o}`]:!0})},{children:[(0,i.jsx)(fS,{children:(0,i.jsx)(oS,{style:f,className:(0,eN.Q)(nS,{"is-active":!!a}),"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100},void 0)},void 0),n?(0,i.jsx)(lS,{children:h.number.to((c=>`${c.toFixed(r)}%`))},void 0):null]}),void 0)}function uS(c){const e=window.getComputedStyle(c);return Math.max(parseInt(e["margin-top"],10),parseInt(e["margin-bottom"],10))+c.getBoundingClientRect().height}function pS(c,e=0,a=0){c&&(null!==e&&null!==a?c.style.transform=`translate(${a}px, ${e}px)`:c.style.removeProperty("transform"))}function dS(c,e,a){c&&(c.style.transition=`transform ${e}ms${a?` ${a}`:""}`)}const zS=c=>{let e=[],a=null;return(...i)=>{e=i,a||(a=requestAnimationFrame((()=>{a=null,c(...e)})))}};function vS(c,e){const a=["input","textarea","select","option","optgroup","video","audio","button","a"],i=["button","link","checkbox","tab"];for(;c!==e;){if(c.getAttribute("data-movable-handle"))return!1;if(a.includes(c.tagName.toLowerCase()))return!0;const e=c.getAttribute("role");if(e&&i.includes(e.toLowerCase()))return!0;if("label"===c.tagName.toLowerCase()&&c.hasAttribute("for"))return!0;c.tagName&&(c=c.parentElement)}return!1}const HS=200;class VS extends HM.Component{listRef=HM.createRef();ghostRef=HM.createRef();topOffsets=[];itemTranslateOffsets=[];initialYOffset=0;lastScroll=0;lastYOffset=0;lastListYOffset=0;dropTimeout;needle=-1;afterIndex=-2;state={itemDragged:-1,itemDraggedOutOfBounds:-1,selectedItem:-1,initialX:0,initialY:0,targetX:0,targetY:0,targetHeight:0,targetWidth:0,liveText:"",scrollingSpeed:0,scrollWindow:!1};schdOnMouseMove;schdOnTouchMove;schdOnEnd;constructor(c){super(c),this.schdOnMouseMove=zS(this.onMouseMove),this.schdOnTouchMove=zS(this.onTouchMove),this.schdOnEnd=zS(this.onEnd)}listener=document;componentDidMount(){setTimeout((()=>{this.calculateOffsets(),this.listener=this.props.container?.current||document,this.listener.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1,capture:!1}),this.listener.addEventListener("mousedown",this.onMouseOrTouchStart)}))}componentDidUpdate(c,e){e.scrollingSpeed!==this.state.scrollingSpeed&&0===e.scrollingSpeed&&this.doScrolling()}componentWillUnmount(){this.listener.removeEventListener("touchstart",this.onMouseOrTouchStart),this.listener.removeEventListener("mousedown",this.onMouseOrTouchStart)}doScrolling=()=>{const{scrollingSpeed:c,scrollWindow:e}=this.state,a=this.listRef.current;window.requestAnimationFrame((()=>{e?window.scrollTo(window.pageXOffset,window.pageYOffset+1.5*c):a.scrollTop+=c,0!==c&&this.doScrolling()}))};getChildren=()=>this.listRef&&this.listRef.current?Array.from(this.listRef.current.children):(console.warn("No items found in the List container. Did you forget to pass & spread the `props` param in renderList?"),[]);static defaultProps={transitionDuration:300,lockVertically:!1,removableByMove:!1,voiceover:{item:c=>`You are currently at a draggable item at position ${c}. Press space bar to lift.`,lifted:c=>`You have lifted item at position ${c}. Press j to move down, k to move up, space bar to drop and escape to cancel.`,moved:(c,e)=>`You have moved the lifted item ${e?"up":"down"} to position ${c}. Press j to move down, k to move up, space bar to drop and escape to cancel.`,dropped:(c,e)=>`You have dropped the item. It has moved from position ${c} to ${e}.`,canceled:c=>`You have cancelled the movement. The item has returned to its starting position of ${c}.`}};calculateOffsets=()=>{this.topOffsets=this.getChildren().map((c=>c.getBoundingClientRect().top)),this.itemTranslateOffsets=this.getChildren().map((c=>uS(c)))};getTargetIndex=c=>this.getChildren().findIndex((e=>e===c.target||e.contains(c.target)));onMouseOrTouchStart=c=>{if(!0===this.props.disabled)return;this.dropTimeout&&this.state.itemDragged>-1&&(window.clearTimeout(this.dropTimeout),this.finishDrop());const e=(a=c).touches&&a.touches.length||a.changedTouches&&a.changedTouches.length;var a;if(!e&&0!==c.button)return;const i=this.getTargetIndex(c);if(-1===i||this.props.values[i]&&this.props.values[i].disabled)return void(-1!==this.state.selectedItem&&(this.setState({selectedItem:-1}),this.finishDrop()));const t=this.getChildren()[i],s=t.querySelector("[data-movable-handle]");if((!s||s.contains(c.target))&&!vS(c.target,t)){if(c.preventDefault(),this.props.beforeDrag&&this.props.beforeDrag({elements:this.getChildren(),index:i}),e){const c={passive:!1};t.style.touchAction="none",document.addEventListener("touchend",this.schdOnEnd,c),document.addEventListener("touchmove",this.schdOnTouchMove,c),document.addEventListener("touchcancel",this.schdOnEnd,c)}else{document.addEventListener("mousemove",this.schdOnMouseMove),document.addEventListener("mouseup",this.schdOnEnd);const c=this.getChildren()[this.state.itemDragged];c&&c.style&&(c.style.touchAction="")}this.onStart(t,e?c.touches[0].clientX:c.clientX,e?c.touches[0].clientY:c.clientY,i)}};getYOffset=()=>{const c=this.listRef.current?this.listRef.current.scrollTop:0;return window.pageYOffset+c};onStart=(c,e,a,i)=>{this.state.selectedItem>-1&&(this.setState({selectedItem:-1}),this.needle=-1);const t=c.getBoundingClientRect(),s=window.getComputedStyle(c);this.calculateOffsets(),this.initialYOffset=this.getYOffset(),this.lastYOffset=window.pageYOffset,this.lastListYOffset=this.listRef.current.scrollTop,this.setState({itemDragged:i,targetX:t.left-parseInt(s["margin-left"],10),targetY:t.top-parseInt(s["margin-top"],10),targetHeight:t.height,targetWidth:t.width,initialX:e,initialY:a})};onMouseMove=c=>{c.cancelable&&c.preventDefault(),this.onMove(c.clientX,c.clientY)};onTouchMove=c=>{c.cancelable&&c.preventDefault(),this.onMove(c.touches[0].clientX,c.touches[0].clientY)};onWheel=c=>{this.state.itemDragged<0||(this.lastScroll=this.listRef.current.scrollTop+=c.deltaY,this.moveOtherItems())};onMove=(c,e)=>{if(-1===this.state.itemDragged)return null;pS(this.ghostRef.current,e-this.state.initialY,this.props.lockVertically?0:c-this.state.initialX),this.autoScrolling(e),this.moveOtherItems()};moveOtherItems=()=>{const c=this.ghostRef.current.getBoundingClientRect(),e=c.top+c.height/2,a=uS(this.getChildren()[this.state.itemDragged]),i=this.getYOffset();this.initialYOffset!==i&&(this.topOffsets=this.topOffsets.map((c=>c-(i-this.initialYOffset))),this.initialYOffset=i),this.isDraggedItemOutOfBounds()&&this.props.removableByMove?this.afterIndex=this.topOffsets.length+1:this.afterIndex=function(c,e){let a,i=0,t=c.length-1;for(;i<=t;){if(a=Math.floor((t+i)/2),!c[a+1]||c[a]<=e&&c[a+1]>=e)return a;c[a]<e&&c[a+1]<e?i=a+1:t=a-1}return-1}(this.topOffsets,e),this.animateItems(-1===this.afterIndex?0:this.afterIndex,this.state.itemDragged,a)};autoScrolling=c=>{const{top:e,bottom:a,height:i}=this.listRef.current.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;if(a>t&&t-c<HS)this.setState({scrollingSpeed:Math.round((HS-(t-c))/10),scrollWindow:!0});else if(e<0&&c<HS)this.setState({scrollingSpeed:Math.round((HS-c)/-10),scrollWindow:!0});else if(this.state.scrollWindow&&0!==this.state.scrollingSpeed&&this.setState({scrollingSpeed:0,scrollWindow:!1}),i+20<this.listRef.current.scrollHeight){let i=0;c-e<HS?i=Math.round((HS-(c-e))/-10):a-c<HS&&(i=Math.round((HS-(a-c))/10)),this.state.scrollingSpeed!==i&&this.setState({scrollingSpeed:i})}};animateItems=(c,e,a,i=!1)=>{this.getChildren().forEach(((t,s)=>{if(dS(t,this.props.transitionDuration),e===s&&i){if(e===c)return pS(t,null);pS(t,e<c?this.itemTranslateOffsets.slice(e+1,c+1).reduce(((c,e)=>c+e),0):-1*this.itemTranslateOffsets.slice(c,e).reduce(((c,e)=>c+e),0))}else pS(t,e<c&&s>e&&s<=c?-a:s<e&&e>c&&s>=c?a:null)}))};isDraggedItemOutOfBounds=()=>{const c=this.getChildren()[this.state.itemDragged].getBoundingClientRect(),e=this.ghostRef.current.getBoundingClientRect();return Math.abs(c.left-e.left)>e.width?(-1===this.state.itemDraggedOutOfBounds&&this.setState({itemDraggedOutOfBounds:this.state.itemDragged}),!0):(this.state.itemDraggedOutOfBounds>-1&&this.setState({itemDraggedOutOfBounds:-1}),!1)};onEnd=c=>{c.cancelable&&c.preventDefault(),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchup",this.schdOnEnd),document.removeEventListener("touchcancel",this.schdOnEnd);const e=this.props.removableByMove&&this.isDraggedItemOutOfBounds();!e&&this.props.transitionDuration>0&&-2!==this.afterIndex&&zS((()=>{dS(this.ghostRef.current,this.props.transitionDuration,"cubic-bezier(.2,1,.1,1)"),this.afterIndex<1&&0===this.state.itemDragged?pS(this.ghostRef.current,0,0):pS(this.ghostRef.current,-(window.pageYOffset-this.lastYOffset)-(this.listRef.current.scrollTop-this.lastListYOffset)+(this.state.itemDragged<this.afterIndex?this.itemTranslateOffsets.slice(this.state.itemDragged+1,this.afterIndex+1).reduce(((c,e)=>c+e),0):-1*this.itemTranslateOffsets.slice(this.afterIndex<0?0:this.afterIndex,this.state.itemDragged).reduce(((c,e)=>c+e),0)),0)}))(),this.dropTimeout=window.setTimeout(this.finishDrop,e||-2===this.afterIndex?0:this.props.transitionDuration)};finishDrop=()=>{const c=this.props.removableByMove&&this.isDraggedItemOutOfBounds();(c||this.afterIndex>-2&&this.state.itemDragged!==this.afterIndex)&&this.props.onChange({oldIndex:this.state.itemDragged,newIndex:c?-1:Math.max(this.afterIndex,0),targetRect:this.ghostRef.current.getBoundingClientRect()}),this.getChildren().forEach((c=>{dS(c,0),pS(c,null),c.style.touchAction=""})),this.setState({itemDragged:-1,scrollingSpeed:0}),this.afterIndex=-2,this.lastScroll>0&&(this.listRef.current.scrollTop=this.lastScroll,this.lastScroll=0)};onKeyDown=c=>{const e=this.state.selectedItem,a=this.getTargetIndex(c);if(!vS(c.target,c.currentTarget)&&-1!==a){if(" "===c.key&&(c.preventDefault(),e===a?(e!==this.needle&&(this.getChildren().forEach((c=>{dS(c,0),pS(c,null)})),this.props.onChange({oldIndex:e,newIndex:this.needle,targetRect:this.getChildren()[this.needle].getBoundingClientRect()}),this.getChildren()[this.needle].focus()),this.setState({selectedItem:-1,liveText:this.props.voiceover.dropped(e+1,this.needle+1)}),this.needle=-1):(this.setState({selectedItem:a,liveText:this.props.voiceover.lifted(a+1)}),this.needle=a,this.calculateOffsets())),("ArrowDown"===c.key||"j"===c.key)&&e>-1&&this.needle<this.props.values.length-1){c.preventDefault();const a=uS(this.getChildren()[e]);this.needle++,this.animateItems(this.needle,e,a,!0),this.setState({liveText:this.props.voiceover.moved(this.needle+1,!1)})}if(("ArrowUp"===c.key||"k"===c.key)&&e>-1&&this.needle>0){c.preventDefault();const a=uS(this.getChildren()[e]);this.needle--,this.animateItems(this.needle,e,a,!0),this.setState({liveText:this.props.voiceover.moved(this.needle+1,!0)})}"Escape"===c.key&&e>-1&&(this.getChildren().forEach((c=>{dS(c,0),pS(c,null)})),this.setState({selectedItem:-1,liveText:this.props.voiceover.canceled(e+1)}),this.needle=-1),("Tab"===c.key||"Enter"===c.key)&&e>-1&&c.preventDefault()}};render(){const c={userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",boxSizing:"border-box",position:"relative"},e={...c,top:this.state.targetY,left:this.state.targetX,width:this.state.targetWidth,height:this.state.targetHeight,position:"fixed",marginTop:0};return(0,i.jsxs)(HM.Fragment,{children:[this.props.renderList({children:this.props.values.map(((e,a)=>{const i=a===this.state.itemDragged,t=a===this.state.selectedItem,s=this.props.values[a]&&this.props.values[a].disabled||!0===this.props.disabled,n={key:this.props.getKey?this.props.getKey(e):a,tabIndex:s?void 0:0,"aria-roledescription":this.props.voiceover.item(a+1),onKeyDown:this.onKeyDown,style:{...c,visibility:i?"hidden":void 0,zIndex:t?5e3:0}};return this.props.renderItem({value:e,props:n,index:a,isDragged:!1,isSelected:t,isOutOfBounds:!1})})),isDragged:this.state.itemDragged>-1,props:{ref:this.listRef}}),this.state.itemDragged>-1&&dw.createPortal(this.props.renderItem({value:this.props.values[this.state.itemDragged],props:{ref:this.ghostRef,style:e,onWheel:this.onWheel},index:this.state.itemDragged,isDragged:!0,isSelected:!1,isOutOfBounds:this.state.itemDraggedOutOfBounds>-1}),this.props.container?.current||document.body),(0,i.jsx)("div",Object.assign({"aria-live":"assertive",role:"log","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0px",padding:"0px",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"}},{children:this.state.liveText}),void 0)]},void 0)}}const MS=iN.F4`
	0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -124;
	}
`,CS=iN.ZP.svg`
	animation: ${c=>{return e=c.theme,iN.F4`
	0% {
		stroke: ${e.accentColor};
		color: ${e.accentColor};
		transform: rotate(0deg);
	}
	100% {
		stroke: ${e.primaryColor};
		color: ${e.primaryColor};
		transform: rotate(360deg);
	}
`;var e}} 1s linear infinite;
	height: ${c=>c.height?(0,eN.X)(c.height):"50px"};
	width: ${c=>c.width?(0,eN.X)(c.width):"50px"};

	& .path {
		stroke: currentColor;
		stroke-linecap: round;
		animation: ${MS} 1.5s ease-in-out infinite;
	}
`;function gS(c){const{height:e=50,width:a=50}=c;return(0,i.jsx)(CS,Object.assign({viewBox:`0 0 ${a} ${e}`,width:a,height:e},{children:(0,i.jsx)("circle",{className:"path",cx:""+e/2,cy:""+a/2,r:""+(a/2-5),fill:"none",strokeWidth:"3"},void 0)}),void 0)}const bS=iN.ZP.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: ${c=>c.height};
	${CS} {
		margin: 40px;
	}
`;function LS({height:c="300px"}){return(0,i.jsx)(bS,Object.assign({height:c},{children:(0,i.jsx)(gS,{},void 0)}),void 0)}const xS="wpeform-component-table",yS=(0,eN.ai)(xS,"table"),NS=iN.ZP.div`
	${eN.aj};
	max-width: 100%;
	${eN.a_};
`,wS=iN.ZP.table`
	border: 0 none;
	border-collapse: collapse;
	width: 100%;
	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	text-align: left;

	&.${yS}--fixedLayout {
		table-layout: fixed;
	}

	th,
	td {
		padding: ${c=>(0,eN.X)(c.theme.gutter)}
			${c=>(0,eN.X)(c.theme.gutter/2)};
	}

	thead,
	tfoot {
		background-color: ${c=>c.theme.backgroundShade};
		tr {
			border-bottom: 1px solid ${c=>c.theme.borderColorBase};
		}
		th {
			font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
			color: ${c=>c.theme.textColorSecondary};
			padding-top: ${c=>(0,eN.X)(c.theme.gutter/2)};
			padding-bottom: ${c=>(0,eN.X)(c.theme.gutter/2)};
			font-family: ${c=>c.theme.fontFamilyHeading};
			&:first-child {
				padding-left: ${c=>(0,eN.X)(c.theme.gutter)};
			}
		}
	}
	tfoot {
		tr {
			border-top: 1px solid ${c=>c.theme.borderColorBase};
			border-bottom: 0 none;
		}
	}

	th {
		color: ${c=>c.theme.headingColor};
		font-weight: bold;
	}

	tbody {
		tr {
			border-bottom: 1px solid ${c=>c.theme.borderColorSplit};
			transition: ${c=>(0,eN.Z)(["background-color"],c.theme.transitionControl)};
			background-color: ${c=>c.theme.appBackgroundColor};
			th:first-child {
				padding-left: ${c=>(0,eN.X)(c.theme.gutter)};
				color: ${c=>c.theme.headingColor};
				font-family: ${c=>c.theme.fontFamilyHeading};
			}
		}
	}

	&.${yS}--type-stripped {
		tbody {
			tr {
				&:nth-child(2n) {
					background-color: ${c=>c.theme.backgroundControl};
				}
			}
		}
	}

	&.${yS}--highlightOnHover {
		tbody {
			tr {
				&:hover {
					background-color: ${c=>c.theme.backgroundHover};
				}
			}
		}
	}

	&.${yS}--isBodyCentered {
		tbody {
			td {
				text-align: center;
			}
		}
		thead,
		tfoot {
			th {
				text-align: center;
			}
		}
	}

	a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;function SS(c){const{className:e,children:a,type:t="stripped",highlightOnHover:s=!0,fixedLayout:n=!1,isBodyCentered:r=!1}=c;return(0,i.jsx)(NS,Object.assign({className:(0,eN.Q)(xS,{[`type-${t}`]:!0,fixedLayout:n,highlightOnHover:s,isBodyCentered:r},e)},{children:(0,i.jsx)(wS,Object.assign({className:(0,eN.Q)(yS,{[`type-${t}`]:!0,fixedLayout:n,highlightOnHover:s,isBodyCentered:r})},{children:a}),void 0)}),void 0)}const kS="wpeform-component-tabs",AS=(0,eN.ai)(kS,"nav-button"),ES=(0,eN.ai)(kS,"button"),TS=(0,eN.ai)(kS,"button-icon"),OS=(0,eN.ai)(kS,"button-label"),FS=(0,eN.ai)(kS,"button-label-title"),_S=(0,eN.ai)(kS,"button-label-subtitle"),DS=iN.ZP.div`
	${eN.aj};
	box-shadow: ${c=>c.theme.boxShadow4dp};
	border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	/** Fixes weird jump on nav button clicks */
	/** it happens only with chrome and that too when clicking navigation button */
	/** check the example, maybe there's a bug with chrome  85.0.4183.102 */
	overflow-anchor: none;
	background-color: ${c=>c.theme.appBackgroundColor};
`,jS=iN.ZP.nav`
	background-color: ${c=>c.theme.primaryLightColor};
	border-top-left-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	border-top-right-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	overflow: hidden;
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch;
	width: 100%;
	position: relative;
	z-index: 2; /** So that inner nav left & right buttons do not bleed through */

	.${AS} {
		padding: 0;
		justify-content: center;
		position: absolute;
		left: 0;
		top: 0;
		flex: 0 0 ${c=>(0,eN.X)(.75*c.theme.gutter)};
		width: ${c=>(0,eN.X)(.75*c.theme.gutter)};
		height: 100%;
		z-index: 1;
		background-color: transparent;
		/** hack for safari to transparentize the last stop */
		background-image: linear-gradient(
			to right,
			${c=>c.theme.primaryLightColor},
			${c=>c.theme.primaryLightColor} 50%,
			${c=>(0,eN.Y)(1,c.theme.primaryLightColor)} 100%
		);
		&::before {
			position: absolute;
			pointer-events: none;
			content: '';
			display: block;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${c=>c.theme.primaryColor};
			opacity: 0;
			transition: ${c=>(0,eN.Z)(["opacity"],c.theme.transitionControl)};
		}
		&:disabled {
			opacity: 0;
			pointer-events: none;
		}
		.${OS} {
			position: relative;
		}
		.${FS} {
			font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
		}
		&.right {
			background-image: linear-gradient(
				to left,
				${c=>c.theme.primaryLightColor},
				${c=>c.theme.primaryLightColor} 50%,
				${c=>(0,eN.Y)(1,c.theme.primaryLightColor)} 100%
			);
			left: auto;
			right: 0;
		}

		&:hover,
		&:focus {
			background-color: transparent;
			&::before {
				opacity: 1;
			}
		}
		&:active {
			.${OS} {
				transform: scale(0.8);
			}
		}
	}
`,IS=(0,iN.ZP)(sN.animated.div)`
	flex: 1 0 auto;
	width: 100%;
	will-change: transform;
	touch-action: pan-y;
`;(0,iN.ZP)(sN.animated.div)`
	will-change: opacity, position, transform;
`;const PS=iN.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	touch-action: pan-y;
`,RS=iN.ZP.button`
	font-family: ${c=>c.theme.fontFamilyHeading};
	position: relative;
	overflow: hidden;
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: ${c=>(0,eN.X)(c.theme.gutter/2)}
		${c=>(0,eN.X)(c.theme.gutter)};
	min-height: ${c=>(0,eN.X)(1.25*c.theme.controlHeightBase)};
	border: 0 none;
	margin: 0;
	outline: none;
	border-radius: 0;
	background-color: ${c=>c.theme.primaryLightColor};
	cursor: pointer;
	color: ${c=>(0,eN.Y)(.3,c.theme.primaryBgText)};
	text-align: left;
	transition: ${c=>(0,eN.Z)(["background-color","color"],c.theme.transitionControl)};

	&.${ES}--active {
		background-color: ${c=>c.theme.primaryColor};
		color: ${c=>c.theme.primaryBgText};
	}

	&:hover {
		background-color: ${c=>c.theme.primaryColor};
	}

	&:focus {
		background-color: ${c=>c.theme.primaryColor};
		color: ${c=>c.theme.primaryBgText};
	}

	&:active {
		.${OS} {
			transform: scale(0.97);
			transform-origin: center center;
		}
	}

	.${TS} {
		font-size: ${c=>(0,eN.X)(c.theme.fz.large3)};
		margin: 0 ${c=>(0,eN.X)(c.theme.gutter/2)} 0 0;
		flex: 0 0 auto;
	}

	.${OS} {
		flex: 0 0 auto;
		display: flex;
		flex-flow: column nowrap;
	}
	.${FS} {
		font-size: ${c=>(0,eN.X)(c.theme.fz.large1)};
		font-weight: ${c=>c.theme.boldHeading?"500":"normal"};
		line-height: 1;
		white-space: nowrap;
	}
	.${_S} {
		font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
		font-style: ${c=>c.theme.italicHeading?"italic":"normal"};
		line-height: 1;
		white-space: nowrap;
		margin: 0;
	}
`,BS=iN.ZP.div`
	position: relative;
	overflow: hidden;
	&:focus {
		outline: none;
	}
`,$S=iN.ZP.footer`
	overflow: hidden;
	border-bottom-left-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	border-bottom-right-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
`,qS=iN.ZP.aside`
	padding: 0 ${c=>(0,eN.X)(1.5*c.theme.gutter)}
		${c=>(0,eN.X)(.5*c.theme.gutter)};
	/* text-align: right; */
`,US=iN.ZP.span`
	display: block;
	font-size: ${c=>(0,eN.X)(c.theme.fz.large3)};
	color: ${c=>c.theme.textColorSecondary};
	font-weight: bold;
	line-height: 1;
`,ZS=iN.ZP.span`
	display: block;
	font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
	line-height: 1;
	color: ${c=>c.theme.textColorSecondary};
`,QS=150,XS=90;function WS(c){const{title:e,subtitle:a,icon:t,onClick:s,active:n,className:r,id:o,disabled:l}=c,[f,h]=(0,eN.$)({darkBg:!0});return(0,i.jsxs)(RS,Object.assign({id:o,disabled:l,className:(0,eN.Q)(ES,{active:!!n},r),onClick:c=>{c.preventDefault(),f(c),s()},type:"button"},{children:[h,t?(0,i.jsx)("span",Object.assign({className:TS},{children:(0,i.jsx)(eN.a3,{iconClass:t},void 0)}),void 0):null,(0,i.jsxs)("span",Object.assign({className:OS},{children:[(0,i.jsx)("span",Object.assign({className:FS},{children:e}),void 0),a?(0,i.jsx)("span",Object.assign({className:_S},{children:a}),void 0):null]}),void 0)]}),void 0)}function GS(c){const{currentTab:e,tabs:a,onTabChange:t}=c,s=(0,iN.Fg)(),n=(0,HM.useRef)(null),r=(0,eN.a$)(n),[o,l]=(0,HM.useState)({leftDisabled:!0,rightDisabled:!1,left:0}),[f,h]=(0,sN.useSpring)((()=>({from:{transform:"translateX(0px)"},to:{transform:`translateX(${-1*o.left}px)`},config:{...s.springConfigStiff,clamp:!0}})));(0,HM.useEffect)((()=>{h.start({transform:`translateX(${-1*o.left}px)`})}),[o.left,h]);const m=(c,e)=>{if(!n.current)return;let a=0;n.current.querySelectorAll("button").forEach((c=>{a+=c.offsetWidth}));const i=n.current.offsetWidth;let t=o.left-c;if(a<i?t=0:(t<0&&(t=0),t>a-i&&(t=a-i)),e){let c=!1,e=!1;0===t&&(c=!0),t+i>=a&&(e=!0),l({left:t,leftDisabled:c,rightDisabled:e})}else h.start({transform:`translateX(${-1*t}px)`})},u=(0,HM.useCallback)(((c,e,a)=>{l({left:c,leftDisabled:e,rightDisabled:a})}),[]);pw({onDrag(c){const{movement:e,down:a}=c;m(e[0],!a)},onWheel(c){const{event:e,movement:a}=c;Math.abs(e.deltaX)<=Math.abs(e.deltaY)||(e.preventDefault(),e.stopPropagation(),m(a[0],!0))}},{target:n.current,eventOptions:{passive:!1},drag:{filterTaps:!0}});const p=(0,HM.useCallback)((c=>{if(!n.current)return;let e=0,a=0,i=!1,t=0;n.current.querySelectorAll("button").forEach((s=>{t+=s.offsetWidth,i||(s.getAttribute("id")===`tab-item-${c}`?(i=!0,a=s.offsetWidth):e+=s.offsetWidth)}));const r=n.current.offsetWidth;if(t<=r)return void u(0,!0,!0);if(e+a<=r)return void u(0,!0,!1);let o=e+a-r+XS;a+XS>r&&(o=e-.75*s.gutter),o<0&&(o=0),o>t-r&&(o=t-r),u(o,!1,o+r>=t)}),[s.gutter,u]);return(0,HM.useLayoutEffect)((()=>{p(e)}),[e,p,r.width]),(0,i.jsxs)(jS,{children:[(0,i.jsx)(WS,{className:AS,title:(0,i.jsx)(eN.a3,{iconClass:"fas fa-angle-left"},void 0),onClick:()=>{m(QS,!0)},disabled:o.leftDisabled},void 0),(0,i.jsx)(IS,Object.assign({style:f},{children:(0,i.jsx)(PS,Object.assign({ref:n},{children:a.map((c=>(0,i.jsx)(WS,{onClick:()=>{t(c.id)},active:e===c.id,id:`tab-item-${c.id}`,icon:c.icon,subtitle:c.subtitle,title:c.title},c.id)))}),void 0)}),void 0),(0,i.jsx)(WS,{className:(0,eN.aa)(AS,"right"),title:(0,i.jsx)(eN.a3,{iconClass:"fas fa-angle-right"},void 0),onClick:()=>{m(-1*QS,!0)},disabled:o.rightDisabled},void 0)]},void 0)}function YS(c){const{stopwatchStartTime:e}=c,[a,t]=(0,HM.useState)(0);(0,HM.useEffect)((()=>{const c=()=>{const c=Math.abs(Date.now()-e);t(c)},a=setInterval(c,1e3);return c(),()=>{clearInterval(a)}}),[e]);const{hours:s,minutes:n,seconds:r}=(0,eN.aW)(a);return(0,i.jsxs)(qS,{children:[(0,i.jsx)(US,{children:(0,eN.ab)((0,eN.a5)("%s:%s:%s","timer","wp-eform"),s,n,r)},void 0),(0,i.jsx)(ZS,{children:(0,eN.ab)((0,eN._)("time elapsed since %s","wp-eform"),(0,eN.b0)(e).format("LTS"))},void 0)]},void 0)}function KS(c){const{currentTab:e,onTabChange:a,tabs:t,children:s,className:n,scrollOnTabChange:r=!0,tabScrollOffset:o=-100,footer:l,showProgressBar:f=!0,showProgressLabel:h=!0,showTabs:m=!0,progressBarPosition:u=eN.v.TOP,progressBarPrecision:p=2,forceProgress:d,stopwatchStartTime:z}=c,v=(0,HM.useRef)(null),H=(0,HM.useRef)(null),V=(0,HM.useRef)(!0);let M=t.findIndex((c=>c.id===e));-1===M&&(M=0);const C=d||M/(t.length||1)*100;return(0,HM.useLayoutEffect)((()=>{V.current?V.current=!1:(H.current&&H.current.focus({preventScroll:!0}),r&&v.current&&(0,eN.aT)(v.current,{verticalOffset:o,cancelOnUserAction:!0,elementToScroll:(0,eN.aU)(v.current)[0]}))}),[e,r,o]),(0,i.jsxs)(DS,Object.assign({ref:v,className:(0,eN.Q)(kS,{"has-footer":!!l},n)},{children:[m?(0,i.jsx)(GS,{currentTab:e,onTabChange:a,tabs:t},void 0):null,f&&u===eN.v.TOP?(0,i.jsx)(mS,{width:C,labelPosition:"bottom",isTopRounded:!m,precision:p,showLabel:h},void 0):null,(0,i.jsx)(BS,Object.assign({tabIndex:0,ref:H},{children:s}),void 0),z?(0,i.jsx)(YS,{stopwatchStartTime:z},void 0):null,f&&u===eN.v.BOTTOM?(0,i.jsx)(mS,{width:C,isBottomRounded:!l,labelPosition:"top",precision:p,showLabel:h},void 0):null,l?(0,i.jsx)($S,{children:l},void 0):null]}),void 0)}const JS="wpeform-component-timer",ck=(0,iN.ZP)(sN.animated.div)`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	height: ${c=>(0,eN.X)(c.theme.controlHeightBase/8)};
	will-change: background-color;
`,ek=(0,iN.ZP)(sN.animated.div)`
	will-change: width;
	position: absolute;
	right: 0;
	top: 0;
	height: ${c=>(0,eN.X)(c.theme.controlHeightBase/8)};
	background-color: ${c=>(0,eN.b1)(.1,c.theme.backgroundShade)};
	max-width: 100%;
`,ak=iN.ZP.div`
	flex: 0 0 ${c=>(0,eN.X)(.8*c.theme.controlHeightBase)};
	margin: 0 ${c=>(0,eN.X)(c.theme.gutter/2)} 0 0;
	height: ${c=>(0,eN.X)(.8*c.theme.controlHeightBase)};
	width: ${c=>(0,eN.X)(.8*c.theme.controlHeightBase)};
	font-size: ${c=>(0,eN.X)(.8*c.theme.controlHeightBase)};
	line-height: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${c=>(0,eN.b1)(.1,c.theme.backgroundShade)};
`;function ik(){return(0,i.jsx)(ak,{children:(0,i.jsx)(eN.a3,{iconClass:"fas fa-clock"},void 0)},void 0)}const tk=iN.ZP.div`
	width: calc(
		100% - ${c=>(0,eN.X)(.8*c.theme.controlHeightBase)}
	);
	flex: 0 0
		calc(100% - ${c=>(0,eN.X)(.8*c.theme.controlHeightBase)});
`,sk=iN.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`,nk=iN.ZP.div`
	font-size: ${c=>(0,eN.X)(c.theme.fz.large2)};
	font-weight: bold;
	line-height: 1.2;
	color: ${c=>c.theme.headingColor};
	font-variant-numeric: tabular-nums;
	small {
		font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
		font-weight: normal;
	}
`,rk=iN.ZP.div`
	font-size: ${c=>(0,eN.X)(c.theme.fz.large1)};
	margin: 0 ${c=>(0,eN.X)(c.theme.gutter/5)};
	line-height: 1.2;
`,ok=iN.ZP.div`
	font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
	color: ${c=>c.theme.textColorSecondary};
	margin: 0;
	padding: 0;
	${eN.b2};
	.${eN.b3} {
		${eN.b2};
	}
`,lk=iN.ZP.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	padding: ${c=>(0,eN.X)(c.theme.gutter/2)};
	padding-top: ${c=>(0,eN.X)(c.theme.gutter/2+c.theme.controlHeightBase/8)};
`,fk=iN.ZP.div`
	${eN.aj};
	font-family: ${c=>c.theme.fontFamilyBody};
	background-color: ${c=>c.theme.backgroundShade};
	position: relative;

	&.${JS}--hidden {
		display: none;
	}

	/** RESPONSIVENESS */
	/**
	 * We don't respond from the responsive container, because this would be used
	 * through a portal with a fixed position.
	 */
	@media screen and (min-width: ${c=>(0,eN.X)(c.theme.breakpoints.tablet)}) {
		${lk} {
			padding: ${c=>(0,eN.X)(c.theme.gutter)};
			padding-top: ${c=>(0,eN.X)(c.theme.gutter+c.theme.controlHeightBase/8)};
		}
		${ak} {
			flex-basis: ${c=>(0,eN.X)(1.2*c.theme.controlHeightBase)};
			margin-right: ${c=>(0,eN.X)(c.theme.gutter)};
			height: ${c=>(0,eN.X)(1.2*c.theme.controlHeightBase)};
			width: ${c=>(0,eN.X)(1.2*c.theme.controlHeightBase)};
			font-size: ${c=>(0,eN.X)(1.2*c.theme.controlHeightBase)};
		}
		${tk} {
			width: calc(
				100% - ${c=>(0,eN.X)(1.2*c.theme.controlHeightBase)}
			);
			flex-basis: calc(
				100% - ${c=>(0,eN.X)(1.2*c.theme.controlHeightBase)}
			);
		}
		${nk} {
			font-size: ${c=>(0,eN.X)(c.theme.fz.large3)};
			small {
				font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
			}
		}
		${rk} {
			font-size: ${c=>(0,eN.X)(c.theme.fz.large2)};
		}
		${ok} {
			font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
		}
	}
`,hk=iN.ZP.div`
	height: ${c=>(0,eN.X)(c.theme.gutter+c.theme.controlHeightBase/8+1.2*c.theme.fz.large2+1.2*c.theme.fz.small2+10)};
	@media screen and (min-width: ${c=>(0,eN.X)(c.theme.breakpoints.tablet)}) {
		height: ${c=>(0,eN.X)(2*c.theme.gutter+c.theme.controlHeightBase/8+1.2*c.theme.fz.large3+1.2*c.theme.fz.small1+10)};
	}
`,mk=iN.ZP.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 999995; /** 1 less than Dropdown z-index */
`;function uk(c){const{time:e,onDone:a,message:t,showUI:s,width:n="100%",containerLayout:r=eN.r.FIXED}=c,o=(0,eN.aL)(e,a),l=(0,iN.Fg)(),f=o/e*100,h=(0,sN.useSpring)({from:{backgroundColor:l.successColor},to:{backgroundColor:f>60?l.successColor:f>20?l.warningColor:l.errorColor},config:l.springConfigSlow}),m=(0,sN.useSpring)({from:{width:"0%"},to:{width:`${(0,eN.X)(100-f,"%")}`},config:l.springConfigSlow}),{hours:u,minutes:p,seconds:d}=(0,eN.aW)(1e3*o,"string"),z=(0,eN.Q)(JS,{hidden:!s}),{hours:v}=(0,HM.useMemo)((()=>(0,eN.aW)(1e3*e,"number")),[e]);return(0,i.jsx)(fk,Object.assign({className:z},{children:(0,i.jsx)(eN.aE,Object.assign({width:n,containerLayout:r,noHorizontalPadding:!0,noVerticalPadding:!0},{children:(0,i.jsxs)(lk,{children:[(0,i.jsx)(ck,Object.assign({style:h},{children:(0,i.jsx)(ek,{style:m},void 0)}),void 0),(0,i.jsx)(ik,{},void 0),(0,i.jsxs)(tk,{children:[(0,i.jsxs)(sk,{children:[v>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(nk,{children:[u,(0,i.jsx)("small",{children:(0,eN.a5)("h","hours short form","wp-eform")},void 0)]},void 0),(0,i.jsx)(rk,{children:":"},void 0)]},void 0):null,(0,i.jsxs)(nk,{children:[p,(0,i.jsx)("small",{children:(0,eN.a5)("m","minutes short form","wp-eform")},void 0)]},void 0),(0,i.jsx)(rk,{children:":"},void 0),(0,i.jsxs)(nk,{children:[d,(0,i.jsx)("small",{children:(0,eN.a5)("s","seconds short form","wp-eform")},void 0)]},void 0)]},void 0),t?(0,i.jsx)(ok,{children:t},void 0):null]},void 0)]},void 0)}),void 0)}),void 0)}uk.Placeholder=hk,uk.Portal=mk;const pk="wpeform-control-address",dk=iN.ZP.div`
	padding: ${c=>(0,eN.X)(.375*c.theme.gutter)};
`,zk=["fieldOne","fieldTwo","country","state","city","zip"],vk={city:(0,i.jsx)(eN.a3,{iconClass:"fas fa-city"},void 0),country:(0,i.jsx)(eN.a3,{iconClass:"fas fa-globe-africa"},void 0),fieldOne:(0,i.jsx)(eN.a3,{iconClass:"fas fa-road"},void 0),fieldTwo:(0,i.jsx)(eN.a3,{iconClass:"fas fa-map-signs"},void 0),state:(0,i.jsx)(eN.a3,{iconClass:"fas fa-map-marker-alt"},void 0),zip:(0,i.jsx)(eN.a3,{iconClass:"fas fa-asterisk"},void 0)},Hk=zk.map((c=>({field:c,width:"fieldOne"===c||"fieldTwo"===c?eN.W.FULL:eN.W.HALF,icon:vk[c]})));function Vk(c){const{fields:e,updateField:a,className:t,hasError:s,id:n,name:r,configuration:o,countries:l,states:f,countriesLoading:h,statesLoading:m,disableAllIcons:u=!1,controlAlignment:p,controlType:d,countriesError:z,onSelectCountry:v,statesError:H,readOnly:V,onBlur:M}=c,C=(0,HM.useRef)(null),[g,b]=(0,HM.useState)(!1),L=(0,HM.useCallback)((()=>{b(!0)}),[]),x=(0,HM.useCallback)((()=>{b(!1)}),[]);return(0,i.jsx)(dk,Object.assign({className:(0,eN.aa)(pk,t),onBlur:()=>{C.current?.matches(":focus-within")||g||M?.()},ref:C},{children:(0,i.jsx)(eN.aA,Object.assign({noPadding:!0},{children:Hk.filter((c=>o[c.field].enabled)).map((c=>(0,i.jsx)(eN.aA.Item,Object.assign({columnSize:c.width},{children:(0,i.jsx)(eN.aA.Gutter,Object.assign({dense:!0},{children:"fieldOne"===c.field||"fieldTwo"===c.field||"city"===c.field||"zip"===c.field?(0,i.jsx)(eN.a4,{value:e[c.field],onChange:e=>{a({[c.field]:e})},hasError:s,id:n?`${n}_${c.field}`:void 0,name:r?`${r}_${c.field}`:void 0,placeholder:o[c.field].placeholder,ariaLabel:o[c.field].placeholder,controlAlignment:p,controlType:d,prefix:u?void 0:c.icon,readOnly:V},void 0):"country"===c.field?z?(0,i.jsx)(eN.a4,{value:e[c.field],onChange:e=>{a({[c.field]:e})},hasError:s,id:n?`${n}_${c.field}`:void 0,name:r?`${r}_${c.field}`:void 0,placeholder:(0,i.jsx)(i.Fragment,{children:(0,eN._)("Count not load countries, please enter manually","wp-eform")},void 0),ariaLabel:o[c.field].placeholder,controlAlignment:p,controlType:d,prefix:u?void 0:(0,i.jsx)(eN.a3,{iconClass:"fas fa-exclamation"},void 0),readOnly:V},void 0):(0,i.jsx)(eN.a2,{value:e.country?[e.country]:[],items:l,loading:h,disabled:V,mode:eN.q.SINGLE,placeholder:o.country.placeholder??(0,eN._)("Country","wp-eform"),ariaLabel:o.country.placeholder??(0,eN._)("Country","wp-eform"),onChange:c=>{c.length?(a({country:c[0],state:""}),v?.(c[0])):(a({country:"",state:""}),v?.(""))},prefix:u?void 0:l.find((c=>c.value===e.country))?.icon??c.icon,onOpen:L,onClose:x},void 0):H||0===f.length?(0,i.jsx)(eN.a4,{value:e[c.field],onChange:e=>{a({[c.field]:e})},hasError:s,id:n?`${n}_${c.field}`:void 0,name:r?`${r}_${c.field}`:void 0,placeholder:(0,i.jsx)(i.Fragment,{children:H?(0,eN._)("could not load states, please enter manually","wp-eform"):o.state.placeholder??(0,eN._)("State","wp-eform")},void 0),ariaLabel:o[c.field].placeholder,controlAlignment:p,controlType:d,prefix:u?void 0:H?(0,i.jsx)(eN.a3,{iconClass:"fas fa-exclamation"},void 0):c.icon,readOnly:V},void 0):(0,i.jsx)(eN.a2,{value:e.state?[e.state]:[],items:f,disabled:V,loading:m,mode:eN.q.SINGLE,ariaLabel:o.state.placeholder??(0,eN._)("State","wp-eform"),placeholder:o.state.placeholder??(0,eN._)("State","wp-eform"),onChange:c=>{c.length?a({state:c[0]}):a({state:""})},prefix:u?void 0:c.icon,onOpen:L,onClose:x},void 0)}),void 0)}),c.field)))}),void 0)}),void 0)}const Mk="wpeform-control-datetimepicker",Ck=(0,eN.ai)(Mk,"group"),gk=(0,eN.ai)(Mk,"date-container",Ck),bk=(0,eN.ai)(Mk,"input"),Lk=(0,eN.ai)(Mk,"day",bk),xk=(0,eN.ai)(Mk,"month",bk),yk=(0,eN.ai)(Mk,"year",bk),Nk=(0,eN.ai)(Mk,"time-container",Ck),wk=(0,eN.ai)(Mk,"hour",bk),Sk=(0,eN.ai)(Mk,"minute",bk),kk=(0,eN.ai)(Mk,"second",bk),Ak=(0,eN.ai)(Mk,"ampm",bk),Ek=iN.ZP.select`
	border: 2px solid ${c=>c.theme.borderColorSplit};
	border-radius: 0;
	padding: ${c=>(0,eN.X)(c.theme.controlHeightBase/20)};
	padding-right: ${c=>(0,eN.X)(c.theme.controlHeightBase/10)};
	outline: none;
	font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
	height: ${c=>(0,eN.X)(.6*c.theme.controlHeightBase)};
	color: ${c=>c.theme.textColor};
	background-color: ${c=>c.theme.appBackgroundColor};

	&:hover {
		border-color: ${c=>c.theme.borderColorBase};
	}
	&:active,
	&:focus {
		border-color: ${c=>c.theme.primaryColor};
	}

	&:disabled {
		background-color: ${c=>c.theme.disabledBackgroundColor};
	}
	&:disabled {
		cursor: not-allowed;
	}

	option {
		background-color: ${c=>c.theme.appBackgroundColor};
		color: ${c=>c.theme.textColor};
	}
`,Tk=iN.ZP.select`
	border-radius: 0;
	padding: 0 ${c=>(0,eN.X)(c.theme.controlHeightBase/10)};
	border: 0 none;
	border-bottom: 2px solid ${c=>c.theme.borderColorSplit};
	color: ${c=>c.theme.textColor};
	background-color: ${c=>c.theme.appBackgroundColor};
	width: 100%;
	height: ${c=>(0,eN.X)(1*c.theme.controlHeightBase-c.theme.fz.small2-2)};
	line-height: ${c=>(0,eN.X)(1*c.theme.controlHeightBase-c.theme.fz.small2-2)};
	transition: ${c=>(0,eN.Z)(["border-color"],c.theme.transitionControl)};
	font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
	color: ${c=>c.theme.textColor};
	&.is-empty {
		color: ${c=>c.theme.disabledColor};
	}

	&:hover {
		border-bottom-color: ${c=>c.theme.borderColorBase};
	}
	&:active,
	&:focus {
		border-bottom-color: ${c=>c.theme.primaryColor};
		outline: none;
	}

	&:disabled {
		background-color: ${c=>c.theme.disabledBackgroundColor};
	}
	&:disabled {
		cursor: not-allowed;
	}

	option {
		background-color: ${c=>c.theme.appBackgroundColor};
		color: ${c=>c.theme.textColor};
		font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	}
`,Ok=iN.ZP.input`
	${eN.b4};
	border: 0 none;
	outline: none;
	appearance: none;
	border-radius: 0;
	text-align: right;
	font-variant-numeric: tabular-nums;
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		margin: 0;
		-webkit-appearance: none;
	}
	height: ${c=>(0,eN.X)(1*c.theme.controlHeightBase-c.theme.fz.small2-2)};
	line-height: ${c=>(0,eN.X)(1*c.theme.controlHeightBase-c.theme.fz.small2-2)};
	margin: 0;
	padding: 0 ${c=>(0,eN.X)(c.theme.controlHeightBase/10)};

	&::placeholder {
		color: ${c=>c.theme.disabledColor};
		font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
		font-weight: bold;
	}

	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	width: 100%;
	color: ${c=>c.theme.textColor};
	background-color: transparent;

	border-bottom: 2px solid ${c=>c.theme.borderColorSplit};
	transition: ${c=>(0,eN.Z)(["border-color"],c.theme.transitionControl)};

	&:hover {
		border-bottom-color: ${c=>c.theme.borderColorBase};
	}
	&:active,
	&:focus {
		border-bottom-color: ${c=>c.theme.primaryColor};
	}

	&:disabled,
	&:read-only {
		background-color: ${c=>c.theme.disabledBackgroundColor};
	}
	&:disabled {
		cursor: not-allowed;
	}
`,Fk=iN.ZP.span`
	position: absolute;
	font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
	line-height: 1;
	bottom: ${c=>(0,eN.X)(c.theme.controlHeightBase/8)};
	left: 0;
	width: 100%;
	color: ${c=>c.theme.textColorSecondary};
	font-weight: bold;
	text-align: right;
	${eN.b2};
`,_k=iN.ZP.label`
	display: block;
	padding: 0;
	padding-bottom: ${c=>(0,eN.X)(c.theme.fz.small2+c.theme.controlHeightBase/4)};
	margin: ${c=>(0,eN.X)(c.theme.controlHeightBase/8)};
	height: ${c=>(0,eN.X)(1.25*c.theme.controlHeightBase)};
	position: relative;
	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	width: 4em;

	&.${Mk}__year {
		width: 3em;
	}
	&.${Mk}__month {
		width: 4.8em;
	}
	&.${Mk}__day {
		width: 2em;
	}
	&.${Mk}__hour {
		width: 2em;
	}
	&.${Mk}__minute {
		width: 2em;
	}
	&.${Mk}__second {
		width: 2em;
	}
	&.${Mk}__ampm {
		width: auto;
		padding-bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
`,Dk=iN.ZP.span`
	margin: 0 ${c=>(0,eN.X)(c.theme.controlHeightBase/8)};
	font-size: ${c=>(0,eN.X)(.5*c.theme.controlHeightBase)};
	font-weight: bold;
	line-height: 1;
`,jk=iN.ZP.div`
	display: flex;
	flex: 0 0 auto;
	align-items: center;
	flex-flow: row nowrap;
	max-width: 100%;
	overflow-x: auto;
`,Ik=iN.ZP.div`
	position: absolute;
	top: 0;
	left: ${c=>(0,eN.X)(c.theme.controlHeightBase/4)};
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	/** So that we can click through it to the input */
	pointer-events: none;
	color: ${c=>c.theme.greyLightColor};
`,Pk=iN.ZP.div`
	position: absolute;
	height: 2px;
	bottom: -2px;
	left: 0;
	right: 0;
	transform-origin: 50% 50%;
	background-color: ${c=>c.theme.primaryColor};
	pointer-events: none;
	transform: scaleX(0);
	transition: ${c=>(0,eN.Z)(["transform"],c.theme.transitionBeizer)};
`,Rk=iN.ZP.div`
	${eN.aj};
	position: relative;

	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	min-height: ${c=>(0,eN.X)(1.5*c.theme.controlHeightBase)};
	border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	box-shadow: 0 0 0 0 transparent;
	color: ${c=>c.theme.textColor};
	padding: 0 ${c=>(0,eN.X)(c.theme.controlHeightBase/4)};
	border: 1px solid ${c=>c.theme.borderColorBase};
	background-color: ${c=>c.theme.appBackgroundColor};
	box-shadow: ${c=>c.theme.boxShadowNoneFocus};
	transition: ${c=>(0,eN.Z)(["border-color","box-shadow"],c.theme.transitionControl)};

	&:hover {
		color: ${c=>c.theme.textColor};
		border-color: ${c=>c.theme.primaryColor};
	}

	&.${Mk}--is-focused {
		color: ${c=>c.theme.textColor};
		border-color: ${c=>c.theme.primaryColor};
		box-shadow: ${c=>c.theme.boxShadowControlFocus};
	}

	&.${Mk}--has-error {
		border-color: ${c=>c.theme.borderColorError};

		&:hover {
			border-color: ${c=>c.theme.borderColorError};
		}

		&.${Mk}--is-focused {
			border-color: ${c=>c.theme.borderColorError};
			box-shadow: ${c=>c.theme.boxShadowControlFocusError};
		}
	}

	&.${Mk}--disabled {
		background-color: ${c=>c.theme.disabledBackgroundColor};
		color: ${c=>c.theme.disabledColor};
		border-color: ${c=>c.theme.disabledColor};
		cursor: not-allowed;
		box-shadow: none;
		${Ok} {
			border-bottom-color: ${c=>c.theme.disabledColor};
		}
	}

	&.${Mk}--readonly {
		background-color: ${c=>c.theme.disabledBackgroundColor};
		border-color: ${c=>c.theme.disabledColor};
		box-shadow: none;
		${Ok} {
			border-bottom-color: ${c=>c.theme.disabledColor};
		}
	}

	&.${Mk}--type-MATERIAL {
		border: 0 none;
		border-bottom: 2px solid ${c=>c.theme.borderColorBase};
		border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)}
			${c=>(0,eN.X)(c.theme.borderRadiusBase)} 0 0;
		box-shadow: none;
		background-color: ${c=>c.theme.backgroundControl};
		transition: ${c=>(0,eN.Z)(["background-color"],c.theme.transitionControl)};

		&:hover {
			border-color: ${c=>c.theme.borderColorBase};
		}

		&.${Mk}--is-focused {
			background-color: ${c=>(0,eN.Y)(.5,c.theme.backgroundControl)};
			border-color: ${c=>c.theme.borderColorBase};
			box-shadow: none;
		}

		&:hover
			> ${Pk},
			&.${Mk}--is-focused
			> ${Pk} {
			transform: scaleX(1);
		}

		&.${Mk}--has-error {
			border-bottom-color: ${c=>c.theme.borderColorError};

			&:hover {
				border-bottom-color: ${c=>c.theme.borderColorError};
			}

			&.${Mk}--is-focused {
				border-bottom-color: ${c=>c.theme.borderColorError};
			}

			> ${Pk} {
				background-color: ${c=>c.theme.borderColorError};
			}
		}

		&.${Mk}--disabled {
			background-color: ${c=>c.theme.disabledBackgroundColor};
			color: ${c=>c.theme.disabledColor};
			border-color: ${c=>c.theme.disabledColor};
			cursor: not-allowed;

			> ${Pk} {
				transform: scaleX(0);
				background-color: ${c=>c.theme.disabledColor};
			}
		}

		&.${Mk}--readonly {
			background-color: ${c=>c.theme.disabledBackgroundColor};
			border-color: ${c=>c.theme.disabledColor};
			> ${Pk} {
				transform: scaleX(0);
				background-color: ${c=>c.theme.disabledColor};
			}
		}
	}

	&.${Mk}--align-LEFT {
		justify-content: flex-start;
	}
	&.${Mk}--align-CENTER {
		justify-content: center;
	}
	&.${Mk}--align-RIGHT {
		justify-content: flex-end;
	}

	&.${Mk}--has-prefix {
		/** [gutter + prefix + gutter] where gutter is controlHeightBase / 4 & prefix is fz.base */
		padding-left: ${c=>(0,eN.X)(c.theme.fz.base+c.theme.controlHeightBase/4*2)};
	}

	/** LABELS */
	&.${Mk}--hide-labels {
		min-height: ${c=>(0,eN.X)(c.theme.controlHeightBase)};

		${Fk} {
			${eN.b5};
		}

		${_k} {
			padding-bottom: 0;
			height: ${c=>(0,eN.X)(.75*c.theme.controlHeightBase-2)};
			&.${Mk}__month {
				width: 2em;
			}
		}

		${Ok} {
			height: ${c=>(0,eN.X)(.75*c.theme.controlHeightBase-2-2)};
			line-height: ${c=>(0,eN.X)(.75*c.theme.controlHeightBase-2-2)};
		}
	}
`;function Bk(c,e,a,i){let t=null,s=null;"datetime"!==e&&"time"!==e||(t=c.hour(),"12hrs"===a&&(0===t?(t=12,s=!0):12===t?(t=12,s=!1):t>12?(s=!1,t-=12):s=!0));const n={year:"date"===e||"datetime"===e?c.year():null,month:"date"===e||"datetime"===e?c.month()+1:null,day:"date"===e||"datetime"===e?c.date():null,hour:t,minute:"time"===e||"datetime"===e?c.minute():null,second:"time"===e||"datetime"===e?c.second():null,am:s};return i&&(n.second=0),n}function $k(c,e,a,i,t){const s={year:null,month:null,day:null,hour:null,minute:null,second:t?0:null,am:"24hrs"!==i||null};if(""===c)return s;const n=(0,eN.b0)(c,a,!0);return n.isValid()?Bk(n,e,i,t):s}function qk(c,e,a,i){let t=(0,eN.b0)();if("date"!==e&&"datetime"!==e||(t=c.day&&c.month&&c.year?t.set("year",c.year).set("month",c.month-1).set("date",c.day):t.set("year",0).set("month",0).set("date",0)),"time"===e||"datetime"===e){let e=c.hour??0;"12hrs"===a&&(e>=12&&(e=12),e=c.am?12===e?0:e:12===e?12:e+12),t=t.set("hour",e).set("minute",c.minute??0).set("second",c.second??0)}else t=t.set("hour",0).set("minute",0).set("second",0);return i&&t.set("second",0),t}function Uk(c,e,a){let i=!0;const t=(0,eN.b6)(c,["day","month","year"],[null,0]),s=(0,eN.b6)(c,["hour","minute","second"],[null]);return i="datetime"===e?t||s:"date"===e?t:s,"datetime"!==e&&"time"!==e||"12hrs"!==a||0!==c.hour||(i=!0),i}function Zk(c,e){let a=!1;const i=(0,eN.b7)(c,["day","month","year"],[null]),t=(0,eN.b7)(c,["hour","minute","second"],[null]);return a="datetime"===e?i&&t:"date"===e?i:t,a}function Qk(c,e,a,i,t){return Uk(c,e,i)?"":qk(c,e,i,t).format(a)}const Xk={1:(0,eN._)("Jan","wp-eform"),2:(0,eN._)("Feb","wp-eform"),3:(0,eN._)("Mar","wp-eform"),4:(0,eN._)("Apr","wp-eform"),5:(0,eN._)("May","wp-eform"),6:(0,eN._)("Jun","wp-eform"),7:(0,eN._)("Jul","wp-eform"),8:(0,eN._)("Aug","wp-eform"),9:(0,eN._)("Sep","wp-eform"),10:(0,eN._)("Oct","wp-eform"),11:(0,eN._)("Nov","wp-eform"),12:(0,eN._)("Dec","wp-eform")};function Wk(c){const{className:e,prefix:a,value:t,controlType:s=eN.u.BOXY,controlAlignment:n=eN.s.LEFT,hasError:r=!1,pickerType:o,dateSeparator:l="/",timeSeparator:f=":",dateTimeSeparator:h=",",onChange:m,onBlur:u,readOnly:p=!1,disabled:d=!1,minValue:z="",maxValue:v="",dateType:H="MMDDYYYY",timeType:V="12hrs",showInputLabels:M=!0,hideSeconds:C=!1,id:g}=c;let b;b=c.dateTimeFormat?c.dateTimeFormat:(0,eN.al)(o);const[L,x]=(0,HM.useState)(!1),[y,N]=(0,HM.useState)((()=>$k(t,o,b,V,C))),w=(0,HM.useRef)(null),S=(0,HM.useRef)(!0),k=c=>{if(w.current&&window.clearTimeout(w.current),!S.current)return;let e=c.target.closest(`.${bk}`)?.nextElementSibling;if("SPAN"===e?.tagName&&(e=e.nextElementSibling),e||(e=c.target.closest(`.${Ck}`)?.nextElementSibling?.querySelector(`.${bk}`)),e){const c=e.querySelector("input, select");c&&(w.current=window.setTimeout((()=>{c.focus()}),50))}},A=(0,eN.b8)(((c,e,a,i,t)=>{Uk(c,e,t)?Zk(c,e)&&a(""):a(Qk(c,e,i,t,C))}),300),E=()=>{let c=!1,e={...y};if(Uk(e,o,V))0===e.year&&(c=!0,e.year=1),0===e.month&&(c=!0,e.month=1),0===e.day&&(c=!0,e.day=1),"time"!==o&&"datetime"!==o||"12hrs"!==V||0!==e.hour||(c=!0,e.hour=1);else{if(("date"===o||"datetime"===o)&&e.month&&e.year&&e.day){const a=(0,eN.b0)().set("month",e.month-1).set("year",e.year).daysInMonth();e.day>a&&(c=!0,e.day=a)}("datetime"===o||"time"===o&&"12hrs"===V)&&0===e.hour&&(c=!0,e.hour=1);const a=qk(y,o,V,C);let i=""!==z&&(0,eN.b0)(z,b),t=""!==v&&(0,eN.b0)(v,b);i&&t&&i.isValid()&&t.isValid()&&(i.isBefore(t)||i.isSame(t)||(console.warn("Invalid min and max value passed to DateTimePicker. Omitting.",z,v),i=!1,t=!1)),i&&i.isValid()&&i.isAfter(a)&&(c=!0,e=Bk(i,o,V,C)),t&&t.isValid()&&t.isBefore(a)&&(c=!0,e=Bk(t,o,V,C))}c&&N(e),Uk(e,o,V)?Zk(e,o)&&A(e,o,m,b,V):A(e,o,m,b,V)},T=(0,eN.aK)(t);(0,HM.useEffect)((()=>{t!==T&&Qk(y,o,b,V,C)!==t&&N($k(t,o,b,V,C))}),[t,o,y,b,T,V,C]);const O=(0,eN.Q)(Mk,{"has-prefix":!!a,"is-not-empty":""!==t,"is-focused":L,[`type-${s}`]:!0,"has-error":r,[`align-${n}`]:!0,readonly:p,disabled:d,"hide-labels":!M},e),F=(0,eN.aJ)(),_={onFocus:()=>{x(!0)},onBlur:c=>{E(),S.current=!0,x(!1),setTimeout((()=>{const e=c.target.closest(`.${Mk}`);F.current&&e&&0===e.querySelectorAll(":focus").length&&u&&u()}),200)},readOnly:p,disabled:d,onKeyDown:c=>{"ArrowDown"===c.key||"ArrowUp"===c.key?S.current=!1:S.current=!0}},D=l?(0,i.jsx)(Dk,{children:l},void 0):null,j=f?(0,i.jsx)(Dk,{children:f},void 0):null,I=h?(0,i.jsx)(Dk,{children:h},void 0):null,P=(0,HM.useRef)((0,eN.b0)()),R={yy:(0,i.jsxs)(_k,Object.assign({className:yk},{children:[(0,i.jsx)(Fk,{children:(0,eN._)("YEAR","wp-eform")},void 0),(0,i.jsx)(Ok,Object.assign({value:y.year??"",type:"number",min:0,max:9999,step:1,onChange:c=>{if(""===c.target.value)return void N((c=>({...c,year:null})));const e=(0,eN.a0)(c.target.value,1,0);N((c=>{const a=c.year;return{...c,year:e>9999?a??9999:e}})),c.target.value.length>=4&&k(c)},title:(0,eN._)("YEAR","wp-eform"),placeholder:M?P.current.format("YYYY"):(0,eN._)("YYYY","wp-eform")},_),void 0)]}),void 0),mm:(0,i.jsxs)(_k,Object.assign({className:xk},{children:[(0,i.jsx)(Fk,{children:(0,eN._)("MONTH","wp-eform")},void 0),(0,i.jsxs)(Tk,Object.assign({value:y.month?.toString()??"",onChange:c=>{if(""===c.target.value)return void N((c=>({...c,month:null})));let e=(0,eN.a0)(c.target.value,0,0);e>12&&(e=12),N((c=>({...c,month:e}))),c.target.value.length>=2&&k(c)},title:(0,eN._)("MONTH","wp-eform"),className:(0,eN.aa)({"is-empty":null===y.month})},_,{children:[(0,i.jsx)("option",Object.assign({value:"",disabled:!0,hidden:!0},{children:M?(0,eN.a5)("----","month-select-placeholder","wp-eform"):(0,eN._)("MONTH","wp-eform")}),void 0),[1,2,3,4,5,6,7,8,9,10,11,12].map((c=>(0,i.jsx)("option",Object.assign({value:c.toString()},{children:Xk[c]}),c)))]}),void 0)]}),void 0),dd:(0,i.jsxs)(_k,Object.assign({className:Lk},{children:[(0,i.jsx)(Fk,{children:(0,eN._)("DAY","wp-eform")},void 0),(0,i.jsx)(Ok,Object.assign({value:y.day??"",type:"number",min:0,step:1,max:31,onChange:c=>{if(""===c.target.value)return void N((c=>({...c,day:null})));let e=(0,eN.a0)(c.target.value,0,0);N((c=>{const a=c.month,i=c.year;let t=31;return a&&i&&(t=(0,eN.b0)().set("month",a-1).set("year",i).set("date",1).daysInMonth()),e>t&&(e=t),{...c,day:e}})),c.target.value.length>=2&&k(c)},title:(0,eN._)("DAY","wp-eform"),placeholder:M?P.current.format("DD"):(0,eN._)("DD","wp-eform")},_),void 0)]}),void 0)};let B=["yy","mm","dd"];return"DDMMYYYY"===H?B=["dd","mm","yy"]:"MMDDYYYY"===H?B=["mm","dd","yy"]:"YYYYDDMM"===H?B=["yy","dd","mm"]:"YYYYMMDD"===H&&(B=["yy","mm","dd"]),(0,i.jsxs)(Rk,Object.assign({className:O,id:g},{children:[a?(0,i.jsx)(Ik,{children:a},void 0):null,"date"===o||"datetime"===o?(0,i.jsxs)(jk,Object.assign({className:gk},{children:[B.map(((c,e)=>(0,i.jsxs)(HM.Fragment,{children:[R[c],2!==e?D:null]},c))),"datetime"===o?I:null]}),void 0):null,"time"===o||"datetime"===o?(0,i.jsxs)(jk,Object.assign({className:Nk},{children:[(0,i.jsxs)(_k,Object.assign({className:wk},{children:[(0,i.jsx)(Fk,{children:(0,eN._)("HR","wp-eform")},void 0),(0,i.jsx)(Ok,Object.assign({value:y.hour??"",type:"number",min:"12hrs"===V?1:0,step:1,max:"12hrs"===V?12:23,onChange:c=>{if(""===c.target.value)return void N((c=>({...c,hour:null})));let e=(0,eN.a0)(c.target.value,0,0);const a="12hrs"===V?12:23;e>a&&(e=a),N((c=>({...c,hour:e}))),c.target.value.length>=2&&k(c)},title:(0,eN._)("HOUR","wp-eform"),placeholder:M?P.current.format("12hrs"===V?"hh":"HH"):(0,eN._)("HR","wp-eform")},_),void 0)]}),void 0),j,(0,i.jsxs)(_k,Object.assign({className:Sk},{children:[(0,i.jsx)(Fk,{children:(0,eN._)("MIN","wp-eform")},void 0),(0,i.jsx)(Ok,Object.assign({value:y.minute??"",type:"number",min:0,step:1,max:59,onChange:c=>{if(""===c.target.value)return void N((c=>({...c,minute:null})));let e=(0,eN.a0)(c.target.value,0,0);e>59&&(e=59),N((c=>({...c,minute:e}))),c.target.value.length>=2&&k(c)},title:(0,eN._)("MINUTE","wp-eform"),placeholder:M?"00":(0,eN._)("MIN","wp-eform")},_),void 0)]}),void 0),C?null:(0,i.jsxs)(i.Fragment,{children:[j,(0,i.jsxs)(_k,Object.assign({className:kk},{children:[(0,i.jsx)(Fk,{children:(0,eN._)("SEC","wp-eform")},void 0),(0,i.jsx)(Ok,Object.assign({value:y.second??"",type:"number",min:0,step:1,max:59,onChange:c=>{if(""===c.target.value)return void N((c=>({...c,second:null})));let e=(0,eN.a0)(c.target.value,0,0);e>59&&(e=59),N((c=>({...c,second:e}))),c.target.value.length>=2&&k(c)},title:(0,eN._)("SECOND","wp-eform"),placeholder:M?"00":(0,eN._)("SEC","wp-eform")},_),void 0)]}),void 0)]},void 0),"12hrs"===V?(0,i.jsx)(_k,Object.assign({className:Ak},{children:(0,i.jsxs)(Ek,Object.assign({value:y.am?"am":"pm",onChange:c=>{"am"===c.target.value?N((c=>({...c,am:!0}))):N((c=>({...c,am:!1})))},onBlur:()=>{E(),x(!1),S.current=!0},onFocus:()=>{x(!0)},disabled:d||p},{children:[(0,i.jsx)("option",Object.assign({value:"am"},{children:(0,eN._)("AM","wp-eform")}),void 0),(0,i.jsx)("option",Object.assign({value:"pm"},{children:(0,eN._)("PM","wp-eform")}),void 0)]}),void 0)}),void 0):null]}),void 0):null,s===eN.u.MATERIAL?(0,i.jsx)(Pk,{},void 0):null]}),void 0)}const Gk="wpeform-control-matrix-choice",Yk=iN.ZP.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: left;
	transform: translate3d(0, 0, 0);
	@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {
		.${eN.b9}, .${eN.ba} {
			.${eN.bb} {
				position: relative;
				top: 0.5px;
				left: 0.5px;
			}
		}
	}
`;function Kk(c){const{className:e,rows:a,columns:t,value:s,onChange:n,fixedLayout:r=!0,highlightOnHover:o=!0,tableType:l="stripped",rowHeadingWidth:f="180px",namePrefix:h,multiple:m=!1,icon:u="fas fa-check",...p}=c,d=(0,iN.Fg)(),z=(0,HM.useMemo)((()=>(0,eN.X)(d.controlHeightBase+d.gutter)),[d]);return(0,i.jsxs)(SS,Object.assign({className:(0,eN.Q)(Gk,void 0,e),fixedLayout:r,highlightOnHover:o,type:l,isBodyCentered:!0},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:f}},void 0),t.map((c=>(0,i.jsx)("th",Object.assign({style:{width:c.width??z},id:`col-${c.id}`},{children:c.title}),c.id)))]},void 0)},void 0),(0,i.jsx)("tbody",{children:a.map((c=>{const e=s.find((e=>e.rowId===c.id));return(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",Object.assign({style:{width:f},id:`row-${c.id}`},{children:c.title}),void 0),t.map((a=>{const t=!(!e?.columns.length||!e.columns.includes(a.id)),s=i=>{if(m){const t=e?.columns??[],s=i?(0,eN.bc)([...t,a.id]):(0,eN.bd)(t,a.id);n(c.id,s)}else i&&n(c.id,[a.id])};return(0,i.jsx)("td",Object.assign({style:{width:a.width??z}},{children:(0,i.jsx)(Yk,{children:m?(0,i.jsx)(eN.at,Object.assign({checked:t,onChange:s,icon:u},p,{name:h?`${h}[${c.id}]`:void 0,ariaLabelledby:`row-${c.id} col-${a.id}`}),void 0):(0,i.jsx)(eN.as,Object.assign({checked:t,onChange:s,icon:u},p,{name:h?`${h}[${c.id}]`:void 0,ariaLabelledby:`row-${c.id} col-${a.id}`}),void 0)},void 0)}),a.id)}))]},c.id)}))},void 0),(0,i.jsx)("tfoot",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:f}},void 0),t.map((c=>(0,i.jsx)("th",Object.assign({style:{width:z}},{children:c.title}),c.id)))]},void 0)},void 0)]}),void 0)}const Jk="wpeform-control-matrix-input";function cA(c){const{className:e,rows:a,columns:t,value:s,onChange:n,fixedLayout:r=!0,highlightOnHover:o=!0,tableType:l="stripped",multiline:f=!1,rowHeadingWidth:h="180px",namePrefix:m,icon:u="",...p}=c,d=(0,iN.Fg)(),z=(0,HM.useMemo)((()=>(0,eN.X)(8*d.controlHeightBase+d.gutter)),[d]);return(0,i.jsxs)(SS,Object.assign({className:(0,eN.Q)(Jk,void 0,e),fixedLayout:r,highlightOnHover:o,type:l},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:h}},void 0),t.map((c=>(0,i.jsx)("th",Object.assign({style:{width:c.width??z},id:`col-${c.id}`},{children:c.title}),c.id)))]},void 0)},void 0),(0,i.jsx)("tbody",{children:a.map((c=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",Object.assign({style:{width:h},id:`row-${c.id}`},{children:c.title}),void 0),t.map((e=>{const a={value:s.find((a=>a.rowId===c.id&&a.columnId===e.id))?.value??"",onChange:a=>{n(c.id,e.id,a)},name:m?`${m}[${c.id}][${e.id}]`:void 0,ariaLabelledby:`row-${c.id} col-${e.id}`,prefix:""===u?void 0:(0,i.jsx)(eN.a3,{iconClass:u},void 0)};return(0,i.jsx)("td",Object.assign({style:{width:e.width??z}},{children:f?(0,i.jsx)(eN.aI,Object.assign({},p,a,{minRows:4,maxRows:4}),void 0):(0,i.jsx)(eN.a4,Object.assign({},p,a),void 0)}),e.id)}))]},c.id)))},void 0),(0,i.jsx)("tfoot",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:h}},void 0),t.map((c=>(0,i.jsx)("th",Object.assign({style:{width:c.width??z}},{children:c.title}),c.id)))]},void 0)},void 0)]}),void 0)}const eA="wpeform-control-rating",aA=(0,eN.ai)(eA,"item"),iA=(0,eN.ai)(eA,"icon"),tA=(0,eN.ai)(eA,"input"),sA=iN.ZP.div`
	position: relative;
	z-index: 10;
	font-size: ${c=>(0,eN.X)(c.theme.controlHeightBase)};
	padding: ${c=>(0,eN.X)(c.theme.gutter/4)};
	border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	border: 1px solid ${c=>(0,eN.Y)(1,c.theme.primaryColor)};
	box-shadow: ${c=>c.theme.boxShadowNoneFocus};
	transition: ${c=>(0,eN.Z)(["border","box-shadow"],c.theme.transitionControl)};
	display: flex;
	align-items: center;
	justify-content: center;
`,nA=iN.ZP.label`
	height: ${c=>(0,eN.X)(c.theme.controlHeightBase+c.theme.gutter/2)};
	width: ${c=>(0,eN.X)(c.theme.controlHeightBase+c.theme.gutter/2)};
	flex: 0 0
		${c=>(0,eN.X)(c.theme.controlHeightBase+c.theme.gutter/2)};
	color: ${c=>c.theme.borderColorBase};
	position: relative;
	cursor: pointer;
	transition: ${c=>(0,eN.Z)(["color","transform"],c.theme.transitionControl)};
	transform: scale(1, 1);
	transform-origin: bottom center;

	&.${aA}--isActive {
		color: ${c=>c.theme.primaryColor};
	}
	&.${aA}--isHovered {
		color: ${c=>c.theme.primaryColor};
		z-index: 10;
		transform: scale(1.1, 1.1);
	}
	&.${aA}--isSelected {
		color: ${c=>c.theme.primaryColor};
		animation: ${c=>{return e=(0,eN.L)(.05,c.theme.primaryColor),a=c.theme.primaryColor,i=(0,eN.b1)(.05,c.theme.primaryColor),iN.F4`
	0% {
		color: ${e};
	}
	50%,
	70%,
	90% {
		color: ${a};
	}
	60%,
	80%,
	100% {
		color: ${i};
	}
`;var e,a,i}}
			1000ms ease-in forwards;
	}
	&.${aA}--disabled {
		cursor: not-allowed;
		transform: scale(1, 1);
	}
`,rA=iN.ZP.input`
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	opacity: 0;

	&:focus-visible:not(:disabled) {
		+ ${sA} {
			box-shadow: ${c=>c.theme.boxShadowControlFocus};
			border-color: ${c=>c.theme.primaryColor};
		}
	}

	&:disabled {
		+ ${sA} {
			color: ${c=>c.theme.disabledColor};
		}
		&:checked {
			+ ${sA} {
				color: ${c=>c.theme.borderColorBase};
			}
		}
	}
`,oA=iN.ZP.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;

	&.${eA}--align-CENTER {
		justify-content: center;
	}
	&.${eA}--align-RIGHT {
		justify-content: flex-end;
	}
`;function lA(c){const{index:e,selected:a,onChange:t,hoverIndex:s,setHoverIndex:n,item:r,...o}=c;return(0,i.jsxs)(nA,Object.assign({className:(0,eN.Q)(aA,{isActive:null===s?null!==a&&a>=e:s>=e,isSelected:a===e,isHovered:s===e,disabled:o.disabled??!1}),onMouseOver:()=>{n(e)}},{children:[(0,i.jsx)(rA,Object.assign({},o,{checked:e===a,onChange:c=>{c.target.checked&&t(e)},className:tA,type:"radio"}),void 0),(0,i.jsx)(sA,Object.assign({className:iA},{children:(0,i.jsx)(eN.a3,{iconClass:r.icon},void 0)}),void 0)]}),void 0)}function fA(c){const{className:e,value:a,onChange:t,items:s,controlAlignment:n=eN.s.LEFT,disabled:r=!1,id:o,hasError:l=!1,...f}=c,[h,m]=(0,HM.useState)(null);return(0,i.jsx)(oA,Object.assign({className:(0,eN.Q)(eA,{hasError:l,disabled:r,[`align-${n}`]:!0},e),onMouseOut:()=>{m(null)}},{children:s.map(((c,e)=>(0,HM.createElement)(lA,{id:`${o??""}${c.id}`,index:e,selected:a,onChange:t,item:c,hoverIndex:h,setHoverIndex:m,...f,disabled:r,key:c.id})))}),void 0)}const hA="wpeform-control-sortable",mA=(0,eN.ai)(hA,"list"),uA=(0,eN.ai)(hA,"list-item"),pA=(0,eN.ai)(hA,"list-item-container"),dA=(0,eN.ai)(hA,"list-item-icon"),zA=(0,eN.ai)(hA,"list-item-label"),vA=iN.ZP.ul`
	list-style: none;
	margin: 0;
	padding: ${c=>(0,eN.X)(c.theme.gutter/2)};
	background-color: ${c=>c.theme.appBackgroundColor};
	border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	transition: ${c=>(0,eN.Z)(["background-color"],c.theme.transitionControl)};
	&.${mA}--isDragged {
		background-color: ${c=>c.theme.backgroundShade};
	}
`,HA=iN.ZP.span`
	flex: 0 0 ${c=>(0,eN.X)(1.5*c.theme.fz.base)};
	width: ${c=>(0,eN.X)(1.5*c.theme.fz.base)};
	height: ${c=>(0,eN.X)(1.5*c.theme.fz.base)};
	font-size: ${c=>(0,eN.X)(c.theme.fz.small1)};
	color: ${c=>c.theme.borderColorBase};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 0 0 0 ${c=>(0,eN.X)(c.theme.gutter/2)};
`,VA=iN.ZP.div`
	flex: 0 0
		calc(
			100% -
				${c=>(0,eN.X)(1.5*c.theme.fz.base+c.theme.gutter/2)}
		);
	width: calc(
		100% -
			${c=>(0,eN.X)(1.5*c.theme.fz.base+c.theme.gutter/2)}
	);
	color: ${c=>c.theme.textColor};
`,MA=iN.ZP.div`
	color: ${c=>c.theme.textColor};
	padding: ${c=>(0,eN.X)(c.theme.gutter/2)};
	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
	line-height: 1.2;
	border: 1px solid ${c=>c.theme.borderColorLight};
	border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	margin: 0;
	font-family: ${c=>c.theme.fontFamilyBody};
	background-color: ${c=>c.theme.appBackgroundColor};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	box-shadow: ${c=>c.theme.boxShadowBottom},
		${c=>c.theme.boxShadowNoneFocus};
	transition: ${c=>(0,eN.Z)(["background-color","border-color","box-shadow"],c.theme.transitionControl)};
`,CA=iN.ZP.li`
	list-style: none;
	margin: 0 0 ${c=>(0,eN.X)(c.theme.gutter/2)} 0;
	padding: 0;
	cursor: grab;
	z-index: 9999999;

	&:hover {
		${MA} {
			border-color: ${c=>c.theme.borderColorSplit};
		}
	}

	&:focus {
		outline: none;
		${MA} {
			box-shadow: ${c=>c.theme.boxShadowBottom},
				${c=>c.theme.boxShadowControlFocus};
			border-color: ${c=>c.theme.primaryColor};
		}
	}

	&.${uA}--isSelected {
		outline: none;
		${MA} {
			background-color: ${c=>c.theme.backgroundSelected};
			box-shadow: ${c=>c.theme.boxShadowBottom},
				${c=>c.theme.boxShadowControlFocus};
			border-color: ${c=>c.theme.primaryColor};
		}
	}

	&.${uA}--isDragged {
		cursor: grabbing;
		${MA} {
			background-color: ${c=>c.theme.backgroundControl};
			border-color: ${c=>c.theme.borderColorBase};
		}
	}

	&.${uA}--isOutOfBounds {
		cursor: not-allowed;
		${MA} {
			background-color: ${c=>c.theme.errorBackgroundColor};
			border-color: ${c=>c.theme.errorColor};
		}
	}
`,gA=iN.ZP.div`
	${eN.aj};
`;function bA(c){const{currentOrder:e,updateOrder:a,items:t,className:s,lockVertically:n=!1}=c,r=(0,eN.ak)();return(0,i.jsx)(gA,Object.assign({className:(0,eN.Q)(hA,void 0,s)},{children:(0,i.jsx)(VS,{lockVertically:n,values:e,onChange:({oldIndex:c,newIndex:i})=>{var t,s,n;a((s=c,n=i,(t=(t=e).slice()).splice(n<0?t.length+n:n,0,t.splice(s,1)[0]),t))},getKey:c=>c,renderList:({children:c,isDragged:e,props:a})=>(0,i.jsx)(vA,Object.assign({className:(0,eN.Q)(mA,{isDragged:e})},a,{children:c}),void 0),renderItem:({isDragged:c,isOutOfBounds:e,isSelected:a,props:s,value:n})=>(0,i.jsx)(CA,Object.assign({className:(0,eN.Q)(uA,{isDragged:c,isOutOfBounds:e,isSelected:a})},s,{children:(0,i.jsxs)(MA,Object.assign({className:pA},{children:[(0,i.jsx)(VA,Object.assign({className:zA},{children:t.find((c=>c.id===n))?.label??(0,eN._)("UNKNOWN ITEM","wp-eform")}),void 0),(0,i.jsx)(HA,Object.assign({className:dA},{children:(0,i.jsx)(eN.a3,{iconClass:"fas fa-grip-lines"},void 0)}),void 0)]}),void 0)}),void 0),container:r},void 0)}),void 0)}const LA="wpeform-control-toggle",xA=(0,eN.ai)(LA,"control-wrapper"),yA=(0,eN.ai)(LA,"label"),NA=(0,eN.ai)(LA,"switch"),wA=(0,eN.ai)(LA,"input"),SA=(0,eN.ai)(LA,"toggle-wrap"),kA=(0,eN.ai)(LA,"toggle-thumb"),AA=(0,eN.ai)(LA,"icon-active"),EA=(0,eN.ai)(LA,"icon-inactive"),TA=1.4,OA=.7,FA=.6,_A=(OA-FA)/2,DA=TA-FA-_A,jA=_A,IA=iN.ZP.label`
	width: calc(
		100% -
			${c=>(0,eN.X)(c.theme.controlHeightBase*TA+c.theme.gutter)}
	);
	flex: 0 0
		calc(
			100% -
				${c=>(0,eN.X)(c.theme.controlHeightBase*TA+c.theme.gutter)}
		);
	margin: 0 0 0 ${c=>(0,eN.X)(c.theme.gutter)};
	/* color: ${c=>c.theme.textColor}; */
`,PA=iN.ZP.div`
	width: ${c=>(0,eN.X)(c.theme.controlHeightBase*TA)};
	flex: 0 0
		${c=>(0,eN.X)(c.theme.controlHeightBase*TA)};
	position: relative;
`,RA=iN.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	line-height: ${c=>(0,eN.X)(c.theme.controlHeightBase*OA)};
	font-size: ${c=>(0,eN.X)(c.theme.fz.base)};
`,BA=(0,iN.ZP)(sN.animated.div)`
	touch-action: pan-y;
	position: absolute;
	top: ${c=>(0,eN.X)(c.theme.controlHeightBase*_A)};
	height: ${c=>(0,eN.X)(c.theme.controlHeightBase*FA)};
	width: ${c=>(0,eN.X)(c.theme.controlHeightBase*FA)};
	border-radius: ${c=>(0,eN.X)(c.theme.controlHeightBase*FA)};
	background-color: ${c=>c.theme.appBackgroundColor};
	box-shadow: ${c=>c.theme.boxShadow2dp},
		${c=>c.theme.boxShadowNoneFocus};
	transition: ${c=>(0,eN.Z)(["box-shadow","background-color","transform","width"],c.theme.transitionControl,["left"])};
	cursor: grab;
	z-index: 10;
`,$A=(0,iN.ZP)(sN.animated.div)`
	user-select: none;
	position: relative;
	height: ${c=>(0,eN.X)(c.theme.controlHeightBase*OA)};
	width: ${c=>(0,eN.X)(c.theme.controlHeightBase*TA)};
	background-color: ${c=>c.theme.borderColorBase};
	border-radius: ${c=>(0,eN.X)(.35*c.theme.controlHeightBase)};
	box-shadow: ${c=>c.theme.boxShadowInset};
	will-change: background-color;
	z-index: 9;
	cursor: pointer;

	&:active:not(.${SA}--disabled) {
		${BA} {
			width: ${c=>(0,eN.X)(c.theme.controlHeightBase*FA+4)};
			cursor: grabbing;
		}
	}
	&.${SA}--checked:not(.${SA}--disabled) {
		&:active {
			${BA} {
				transform: translateX(-4px) !important;
			}
		}
	}
`,qA=(0,iN.ZP)(sN.animated.span)`
	pointer-events: none;
	position: absolute;
	display: flex;
	height: ${c=>(0,eN.X)(c.theme.controlHeightBase*OA)};
	width: ${c=>(0,eN.X)(c.theme.controlHeightBase*(TA-FA-_A))};
	top: 0;
	left: ${c=>(0,eN.X)(c.theme.controlHeightBase*(FA+_A))};
	align-items: center;
	justify-content: center;
	font-size: ${c=>(0,eN.X)(c.theme.fz.small2)};
	color: ${c=>c.theme.primaryBgText};
	will-change: opacity;

	&.${AA} {
		left: ${c=>(0,eN.X)(c.theme.controlHeightBase*_A)};
	}
`,UA=iN.ZP.input`
	position: absolute;
	left: 2px;
	top: 2px;
	margin: 0;
	padding: 0;
	opacity: 0;

	&:hover:not(:disabled) {
		+ ${$A} {
			${BA} {
				box-shadow: ${c=>c.theme.boxShadow4dp},
					0 0 0 ${c=>(0,eN.X)(.2*c.theme.controlHeightBase)}
						${c=>(0,eN.Y)(.8,c.theme.textColor)};
			}
		}
	}

	&:focus {
		outline: none;
	}

	&:focus:not(:disabled) {
		+ ${$A} {
			${BA} {
				box-shadow: ${c=>c.theme.boxShadow4dp},
					0 0 0 ${c=>(0,eN.X)(.3*c.theme.controlHeightBase)}
						${c=>(0,eN.Y)(.8,c.theme.textColor)};
			}
		}
	}

	&:active:not(:disabled),
	&:active:focus:not(:disabled),
	&:active:focus:hover:not(:disabled),
	&:active:hover:not(:disabled) {
		+ ${$A} {
			${BA} {
				width: ${c=>(0,eN.X)(c.theme.controlHeightBase*FA+4)};
				box-shadow: ${c=>c.theme.boxShadow4dp},
					0 0 0 ${c=>(0,eN.X)(.25*c.theme.controlHeightBase)}
						${c=>(0,eN.Y)(.8,c.theme.textColor)};
				cursor: grabbing;
			}
		}
	}

	&:checked {
		&:hover:not(:disabled) {
			+ ${$A} {
				${BA} {
					box-shadow: ${c=>c.theme.boxShadow4dp},
						0 0 0 ${c=>(0,eN.X)(.2*c.theme.controlHeightBase)}
							${c=>(0,eN.Y)(.8,c.theme.primaryColor)};
				}
			}
		}

		&:focus:not(:disabled) {
			+ ${$A} {
				${BA} {
					box-shadow: ${c=>c.theme.boxShadow4dp},
						0 0 0 ${c=>(0,eN.X)(.3*c.theme.controlHeightBase)}
							${c=>(0,eN.Y)(.8,c.theme.primaryColor)};
				}
			}
		}

		&:active:not(:disabled),
		&:active:focus:not(:disabled),
		&:active:focus:hover:not(:disabled),
		&:active:hover:not(:disabled) {
			+ ${$A} {
				${BA} {
					transform: translateX(-4px);
					box-shadow: ${c=>c.theme.boxShadow4dp},
						0 0 0 ${c=>(0,eN.X)(.25*c.theme.controlHeightBase)}
							${c=>(0,eN.Y)(.8,c.theme.primaryColor)};
				}
			}
		}
	}

	&:disabled {
		+ ${$A} {
			cursor: not-allowed;
			background-color: ${c=>c.theme.disabledColor} !important;
			${BA} {
				box-shadow: ${c=>c.theme.boxShadow2dp},
					${c=>c.theme.boxShadowNoneFocus};
				background-color: ${c=>c.theme.disabledBackgroundColor};
				cursor: not-allowed;
			}
		}
	}
`,ZA=iN.ZP.div`
	width: ${c=>(0,eN.X)(c.theme.controlHeightBase*TA)};
	&.${LA}--hasLabel {
		width: 100%;
	}

	&.${LA}--align-CENTER {
		margin: 0 auto;

		&.${LA}--hasLabel {
			${RA} {
				flex-flow: row wrap;
				align-items: center;
				justify-content: center;
			}
			${IA} {
				margin: ${c=>(0,eN.X)(c.theme.gutter/2)} 0 0 0;
				flex: 0 0 100%;
				width: 100%;
				text-align: center;
			}
		}
	}
	&.${LA}--align-RIGHT {
		margin: 0 0 0 auto;
		&.${LA}--hasLabel {
			${IA} {
				margin: 0 ${c=>(0,eN.X)(c.theme.gutter)} 0 0;
				text-align: right;
			}
			${PA} {
				order: 1;
			}
		}
	}
`;function QA(c){const{className:e,value:a,onChange:t,hasError:s=!1,label:n,disabled:r=!1,activeIcon:o,inactiveIcon:l,controlAlignment:f=eN.s.LEFT,...h}=c,m=(0,iN.Fg)(),[u,p]=(0,sN.useSpring)((()=>({from:{left:a?m.controlHeightBase*DA+"px":m.controlHeightBase*jA+"px",interpolator:a?1:0},to:{left:a?m.controlHeightBase*DA+"px":m.controlHeightBase*jA+"px",interpolator:a?1:0},config:m.springConfigStiff})));(0,HM.useEffect)((()=>{p.start({left:a?m.controlHeightBase*DA+"px":m.controlHeightBase*jA+"px",interpolator:a?1:0})}),[a,p,m.controlHeightBase]);const d=(0,HM.useRef)(null),z=(0,HM.useRef)(null),v=(H=c=>{if(r)return;const{movement:e,down:i,last:s,tap:n}=c;if(n)return void t(!a);const o=e[0],l=a?m.controlHeightBase*DA+o:o,f=m.controlHeightBase*TA,h=Math.ceil(l+m.controlHeightBase*(FA/2));let u,d=(0,eN.ap)(h/f,2);d<.5?d-=.2:d+=.2,d<0?d=0:d>1&&(d=1),p.start({left:`${l}px`,interpolator:d}),i&&!s||(u=!(h<f/2),a===u?p.start({left:u?m.controlHeightBase*DA+"px":m.controlHeightBase*jA+"px",interpolator:u?1:0}):t(u),z.current?.focus())},V={bounds:d,rubberband:[.15,.15],filterTaps:!1},GN(YN),uw({drag:H},V||{},"drag"));var H,V;return(0,i.jsx)(ZA,Object.assign({className:(0,eN.Q)(LA,{hasError:s,disabled:r,hasLabel:!!n,[`align-${f}`]:!0},e)},{children:(0,i.jsxs)(RA,Object.assign({className:xA},{children:[(0,i.jsxs)(PA,Object.assign({className:NA},{children:[(0,i.jsx)(UA,Object.assign({type:"checkbox",className:wA,checked:a,onChange:c=>{t(c.target.checked)},disabled:r,value:"true"},h),void 0),(0,i.jsxs)($A,Object.assign({className:(0,eN.Q)(SA,{checked:a,disabled:r}),ref:d,style:{backgroundColor:u.interpolator.to({range:[0,1],output:[m.borderColorBase,m.primaryColor],extrapolate:"clamp"})},onClick:c=>{c.preventDefault(),r||c.target.isEqualNode(z.current)||t(!a)}},{children:[o?(0,i.jsx)(qA,Object.assign({className:AA,style:{opacity:u.interpolator.to({range:[0,1],output:[0,1],extrapolate:"clamp"})}},{children:(0,i.jsx)(eN.a3,{iconClass:o},void 0)}),void 0):null,(0,i.jsx)(BA,Object.assign({style:{left:u.left},className:kA,ref:z},v()),void 0),l?(0,i.jsx)(qA,Object.assign({className:EA,style:{opacity:u.interpolator.to({range:[0,1],output:[1,0],extrapolate:"clamp"})}},{children:(0,i.jsx)(eN.a3,{iconClass:l},void 0)}),void 0):null]}),void 0)]}),void 0),n?(0,i.jsx)(IA,Object.assign({className:yA,htmlFor:h.id},{children:n}),void 0):null]}),void 0)}),void 0)}const XA=new pL({addTypename:!0,resultCaching:!0,typePolicies:{FormElementConfigMcqOptionType:{keyFields:!1},CategoryType:{keyFields:["id"]},FormType:{keyFields:["id"]},IntegrationCustomDataType:{keyFields:!1},FormPaymentsCouponItemType:{keyFields:!1},FormScoreItemType:{keyFields:!1},FormScoreDesignationType:{keyFields:!1},FormScoreTotalRedirectionItemType:{keyFields:!1},FormScorePercentageRedirectionItemType:{keyFields:!1},FormScoreConditionalRedirectionItemType:{keyFields:!1},ConditionalEventType:{keyFields:!1},FormStructureType:{keyFields:!1},FormElementType:{keyFields:!1},FormElementAppearanceWidthType:{keyFields:!1},FormElementConfigButtonType:{keyFields:!1},ElementScoreConditionType:{keyFields:!1},FormElementConfigMaskRegExpType:{keyFields:!1},FormPoolType:{keyFields:!1},ConditionalType:{keyFields:!1},ConditionalConsequenceType:{keyFields:!1},User:{keyFields:["id"]},FormLimitationMessageType:{keyFields:!1},FormNodeType:{keyFields:["id"]},FormMetaPaymentGatewayType:{keyFields:!1},FormIntegrationMailChimpListItemType:{keyFields:!1},SubmissionType:{keyFields:["id"]},FormSubmissionElementType:{keyFields:!1},SubmissionNodeType:{keyFields:["id"]},SubmissionMetaOwnerType:{keyFields:!1},FormMetaOwnerType:{keyFields:!1},SubmissionMetaCategoryType:{keyFields:!1},FormMetaCategoryType:{keyFields:!1}}});"undefined"!=typeof window&&(window.wpeformApolloCache=XA);let WA="/graphql";try{"string"==typeof process.env.WPEFORM_GQL_URI&&(WA=process.env.WPEFORM_GQL_URI)}catch(c){}"undefined"!=typeof WPEFormGraphQLApp&&(WA=WPEFormGraphQLApp.gqlUri);const GA=new Gx({cache:XA,link:new Vx({uri:WA})}),YA=_y`
	query FormForSubmission($id: ID!, $increaseViewCount: Boolean) {
		form(id: $id, increaseViewCount: $increaseViewCount) {
			...FFormForSubmission
		}
		# Query for available elements
		formMeta {
			elements {
				type
				defaultDataValue {
					...FAllElementSubmission
				}
			}
		}
	}
	# Form for submission fragment
	${_y`
	fragment FFormForSubmission on FormType {
		limitations {
			id
			message
			dynamicAnchors
			mentions
		}
		notices {
			id
			message
			dynamicAnchors
			mentions
		}
		elements {
			appearance {
				...FElementAppearance
			}
			children
			id
			type
			config {
				...FAllElementConfig
			}
			extras
		}
		conditionals {
			...FConfigConditionals
		}
		id
		name
		pools {
			id
			name
			children
		}
		settings {
			timer {
				...FConfigSettingsTImer
			}
			score {
				...FConfigSettingsScore
			}
		}
		structures {
			...FStructure
		}
		styles {
			...FConfigStyles
		}
	}
	# Conditionals fragments
	${_y`
	fragment FConfigConditionals on ConditionalType {
		id
		events {
			id
			fieldid
			has
			operation
			operator
			value
			relation
		}
		consequences {
			id
			action
			fieldsToShow
			fieldsToHide
			fieldToSet
			value
			pagesToShow
			pagesToHide
		}
	}
`}
	# Settings Fragments
	${_y`
	fragment FConfigSettingsTImer on FormSettingsTimerType {
		recordSubmissionTime
		showStopwatch
		submitTimer
		showTimer
		timeLimit
		timerMessage
	}
`}
	${_y`
	fragment FConfigSettingsScore on FormSettingsScoreType {
		precision
		scoreLists {
			id
			name
			color
			outcomeName
			outcomeDescription
		}
		designations {
			description
			from
			fromToType
			id
			name
			scoreCategory
			to
		}
	}
`}
	# Style Fragments
	${_y`
	fragment FConfigStyles on FormStylesType {
		appearance {
			...FConfigStyleAppearance
		}
		pagination {
			...FConfigStylePagination
		}
		customBackground {
			...FConfigStyleCustomBackground
		}
		theme {
			...FConfigStyleTheme
		}
		typography {
			...FConfigStyleTypography
		}
		formBehavior {
			...FConfigStyleFormBehavior
		}
		redirection {
			...FConfigStyleRedirection
		}
		tracking {
			...FConfigStyleTracking
		}
	}
	${_y`
	fragment FConfigStyleAppearance on FormStylesAppearanceType {
		containerLayout
		maxWidth
		controlType
		controlAlignment
		controlLayout
	}
`}
	${_y`
	fragment FConfigStylePagination on FormStylesPaginationType {
		# TABS and PROGRESS Bar
		showTabs
		showProgressBar
		progressDecimalPoint
		progressBarPosition
		showProgressLabel
		# SCROLL Behavior
		autoProgress
		autoProgressDelay
		autoScroll
		scrollOffset
		autoSubmit
		blockPreviousNavigation
		paginationRestriction
		# Buttons Panel
		panelEnabled
		alignment
		size
		style
		rounded
		colored
		barlike
		nextLabel
		nextIcon
		nextIconPosition
		prevLabel
		prevIcon
		prevIconPosition
		submitLabel
		submitIcon
		submitIconPosition
		updateLabel
		updateIcon
		updateIconPosition
		showResetButton
		resetLabel
		resetMessage
		resetIcon
		resetIconPosition
		hideWhenNotRelevant
	}
`}
	${_y`
	fragment FConfigStyleCustomBackground on FormStylesCustomBackgroundType {
		backgroundImage
		backgroundClip
		backgroundAttachment
		backgroundOrigin
		backgroundPosition
		backgroundRepeat
		backgroundSize
		enabled
	}
`}
	${_y`
	fragment FConfigStyleTheme on FormStylesThemeType {
		css
		customColorBg
		customColorPrimary
		customColorSecondary
		customColorText
		scheme
		darkMode
	}
`}
	${_y`
	fragment FConfigStyleTypography on FormStylesTypographyType {
		baseFont
		bodyFamily
		bodyFamilyCustom
		headFamily
		headFamilyCustom
		headFontBold
		headFontItalic
	}
`}
	${_y`
	fragment FConfigStyleFormBehavior on FormStylesFormBehaviorType {
		disabledAutoComplete
		subject
		message
		updateSubject
		updateMessage
		kioskMode
		kioskMessage
		kioskTime
		errorSubject
		errorRetryButtonLabel
		errorRetryButtonIcon
		errorRetryButtonIconPosition
	}
`}
	${_y`
	fragment FConfigStyleRedirection on FormStylesRedirectionType {
		type
		url
		delay
		message
		iframeRedirect
		scoreTotalLogic {
			id
			scoreId
			url
			from
			to
		}
		scorePercentageLogic {
			id
			scoreId
			url
			from
			to
		}
		conditionalLogic {
			id
			url
			events {
				fieldid
				has
				id
				operation
				operator
				relation
				value
			}
		}
	}
`}
	${_y`
	fragment FConfigStyleTracking on FormStylesTrackingType {
		urlTracking
		urlTrackId
	}
`}
`}
	# Elements Fragments
	${_y`
	fragment FElementAppearance on FormElementAppearanceType {
		title
		subtitle
		description
		overrideControlAppearance
		controlType
		controlAlignment
		controlLayout
		hint
		hintIcon
		hintLabel
		answerDescription
		columnSize
		basicWidth
		widths {
			id
			containerMinWidth
			elementWidth
		}
		initiallyHidden
		className
	}
`}
	${_y`
	fragment FAllElementConfig on FormElementConfigType {
		buttons {
			...FButtonsConfig
		}
		checkbox {
			...FCheckboxConfig
		}
		dropdown {
			...FDropdownConfig
		}
		heading {
			...FHeadingConfig
		}
		radio {
			...FRadioConfig
		}
		text {
			...FTextConfig
		}
		textarea {
			...FTextareaConfig
		}
		toggle {
			...FToggleConfig
		}
		slider {
			...FSliderConfig
		}
		range {
			...FRangeConfig
		}
		mathcalc {
			...FMathcalcConfig
		}
		rating {
			...FRatingConfig
		}
		matrixchoice {
			...FMatrixchoiceConfig
		}
		sortable {
			...FSortableConfig
		}
		datetimeinput {
			...FDatetimeinputConfig
		}
		matrixinput {
			...FMatrixinputConfig
		}
		singlecheckbox {
			...FSinglecheckboxConfig
		}
		address {
			...FAddressConfig
		}
	}
	${_y`
	fragment FButtonsConfig on FormElementButtonsConfigType {
		attributes {
			open
			popupHeight
			popupWidth
		}
		buttons {
			id
			icon
			iconPosition
			label
			link
		}
		interface {
			alignment
			colored
			size
			style
			rounded
		}
	}
`}
	${_y`
	fragment FCheckboxConfig on FormElementCheckboxConfigType {
		interface {
			icon
			columns
			options {
				...FElemInterfaceOptionsConfig
			}
			others
			othersId
			othersPlaceholder
			shuffle
		}
		score {
			...FElemScoreConfig
		}
		attributes {
			...FElemAttributeConfig
		}
		validation {
			required
			filters {
				...FElemValidationFiltersConfig
			}
		}
	}
`}
	${_y`
	fragment FDropdownConfig on FormElementDropdownConfigType {
		interface {
			icon
			placeholder
			showSearch
			searchPlaceholder
			emptySearchResultNotice
			options {
				...FElemInterfaceOptionsConfig
			}
			othersId
			others
			othersPlaceholder
			shuffle
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		validation {
			filters {
				...FElemValidationFiltersConfig
			}
			required
			selectType
		}
	}
`}
	${_y`
	fragment FHeadingConfig on FormElementHeadingConfigType {
		interface {
			divider
			icon
			showTop
			size
			tag
		}
	}
`}
	${_y`
	fragment FRadioConfig on FormElementRadioConfigType {
		interface {
			columns
			icon
			othersId
			options {
				...FElemInterfaceOptionsConfig
			}
			others
			othersPlaceholder
			shuffle
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		validation {
			required
		}
	}
`}
	${_y`
	fragment FTextConfig on FormElementTextConfigType {
		interface {
			icon
			placeholder
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		validation {
			filters {
				...FElemValidationFiltersConfig
			}
			masks {
				...FElemValidationMasks
			}
			required
		}
	}
`}
	${_y`
	fragment FTextareaConfig on FormElementTextareaConfigType {
		interface {
			icon
			placeholder
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		validation {
			required
			filters {
				...FElemValidationFiltersConfig
			}
		}
	}
`}
	${_y`
	fragment FToggleConfig on FormElementToggleConfigType {
		interface {
			activeIcon
			activeLabel
			inactiveIcon
			inactiveLabel
		}
		score {
			...FElemScoreConfig
		}
		attributes {
			...FElemAttributeConfig
		}
		validation {
			required
		}
	}
`}
	${_y`
	fragment FSliderConfig on FormElementSliderConfigType {
		score {
			...FElemScoreConfig
		}
		attributes {
			...FElemAttributeConfig
		}
		interface {
			customMarks {
				index
				label
				markId
			}
			max
			min
			precision
			showFreeInput
			showMarks
			step
		}
	}
`}
	${_y`
	fragment FRangeConfig on FormElementRangeConfigType {
		score {
			...FElemScoreConfig
		}
		attributes {
			...FElemAttributeConfig
		}
		interface {
			customMarks {
				index
				label
				markId
			}
			max
			min
			precision
			separator
			showFreeInput
			showMarks
			step
		}
	}
`}
	${_y`
	fragment FMathcalcConfig on FormElementMathcalcConfigType {
		interface {
			decimalSeparator
			formula
			precision
			prefix
			suffix
			type
			thousandsSeparator
		}
	}
`}
	${_y`
	fragment FRatingConfig on FormElementRatingConfigType {
		interface {
			compareWith
			customItems {
				icon
				itemId
			}
			customRatingIcon
			feedbackLabel
			feedbackWhen
			ratingMax
			showFeedback
			type
		}
		validation {
			required
		}
		score {
			...FElemScoreConfig
		}
		attributes {
			...FElemAttributeConfig
		}
	}
`}
	${_y`
	fragment FMatrixchoiceConfig on FormElementMatrixchoiceConfigType {
		validation {
			required
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		interface {
			columns {
				itemId
				label
				num
				width
			}
			rows {
				itemId
				label
				num
				width
			}
			icon
			multiple
			rowHeadingWidth
			tableType
		}
	}
`}
	${_y`
	fragment FSortableConfig on FormElementSortableConfigType {
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		interface {
			items {
				itemId
				label
			}
			lockVertically
			shuffle
		}
	}
`}
	${_y`
	fragment FDatetimeinputConfig on FormElementDatetimeinputConfigType {
		validation {
			required
			maxValue
			minValue
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		interface {
			dateTimeSeparator
			format
			icon
			showInputLabels
			timeType
			type
			hideSeconds
		}
	}
`}
	${_y`
	fragment FMatrixinputConfig on FormElementMatrixinputConfigType {
		validation {
			required
		}
		attributes {
			...FElemAttributeConfig
		}
		score {
			...FElemScoreConfig
		}
		interface {
			columns {
				itemId
				label
				num
				width
			}
			rows {
				itemId
				label
				num
				width
			}
			icon
			multiline
			rowHeadingWidth
			tableType
		}
	}
`}
	${_y`
	fragment FSinglecheckboxConfig on FormElementSinglecheckboxConfigType {
		interface {
			icon
		}
		score {
			...FElemScoreConfig
		}
		attributes {
			...FElemAttributeConfig
		}
		validation {
			required
		}
	}
`}
	${_y`
	fragment FAddressConfig on FormElementAddressConfigType {
		validation {
			required
		}
		attributes {
			...FElemAttributeConfig
		}
		interface {
			cityPlaceholder
			countryPlaceholder
			disableIcons
			fieldOne
			fieldOnePlaceholder
			fieldTwo
			fieldTwoPlaceholder
			restrictCountries
			showCity
			showCountry
			showState
			showZip
			statePlaceholder
			zipPlaceholder
		}
	}
`}
`}
	# Element generic fragments
	${_y`
	fragment FElemAttributeConfig on FormElementConfigAttributesType {
		defaultValue
		prefilParameter
		prefilType
		readonly
	}
`}
	${_y`
	fragment FElemInterfaceOptionsConfig on FormElementConfigMcqOptionType {
		answerDescription
		id
		label
		num
	}
`}
	${_y`
	fragment FElemScoreConfig on FormElementConfigScoreType {
		scoreConditions {
			compareWith
			condition
			id
			operation
			scoreId
			scoreOperation
			scoreValue
		}
	}
`}
	${_y`
	fragment FElemValidationFiltersConfig on FormElementConfigFiltersType {
		type
		minItems
		maxItems
		minString
		maxString
		minNum
		maxNum
	}
`}
	${_y`
	fragment FElemValidationMasks on FormElementConfigMasksType {
		alwaysShowMask
		maskPreset
		maskRegExps {
			caseSensitive
			id
			pattern
		}
		maskString
		maskType
		placeholder
	}
`}
	# Structure Fragments
	${_y`
	fragment FStructure on FormStructureType {
		id
		config {
			title
			subtitle
			icon
			timer
			initiallyHidden
		}
		children
	}
`}
`}
	# Submission Fragments
	${_y`
	fragment FAllElementSubmission on FormSubmissionElementValueType {
		captcha {
			...FCaptchaSubmission
		}
		radio {
			...FRadioSubmission
		}
		checkbox {
			...FCheckboxSubmission
		}
		dropdown {
			...FDropdownSubmission
		}
		text {
			...FTextSubmission
		}
		textarea {
			...FTextareaSubmission
		}
		toggle {
			...FToggleSubmission
		}
		slider {
			...FSliderSubmission
		}
		range {
			...FRangeSubmission
		}
		mathcalc {
			...FMathcalcSubmission
		}
		rating {
			...FRatingSubmission
		}
		matrixchoice {
			...FMatrixchoiceSubmission
		}
		sortable {
			...FSortableSubmission
		}
		datetimeinput {
			...FDatetimeinputSubmission
		}
		matrixinput {
			...FMatrixinputSubmission
		}
		singlecheckbox {
			...FSinglecheckboxSubmission
		}
		address {
			...FAddressSubmission
		}
	}
	# Submission Fragments
	${_y`
	fragment FCaptchaSubmission on FormElementCaptchaSubmissionElementValueType {
		encrypted
		solved
	}
`}
	${_y`
	fragment FRadioSubmission on FormElementRadioSubmissionElementValueType {
		other
		selected
	}
`}
	${_y`
	fragment FCheckboxSubmission on FormElementCheckboxSubmissionElementValueType {
		selected
		other
	}
`}
	${_y`
	fragment FDropdownSubmission on FormElementDropdownSubmissionElementValueType {
		selected
		other
	}
`}
	${_y`
	fragment FTextSubmission on FormElementTextSubmissionElementValueType {
		input
	}
`}
	${_y`
	fragment FTextareaSubmission on FormElementTextareaSubmissionElementValueType {
		input
	}
`}
	${_y`
	fragment FToggleSubmission on FormElementToggleSubmissionElementValueType {
		selected
	}
`}
	${_y`
	fragment FSliderSubmission on FormElementSliderSubmissionElementValueType {
		selected
	}
`}
	${_y`
	fragment FRangeSubmission on FormElementRangeSubmissionElementValueType {
		maxSelected
		minSelected
	}
`}
	${_y`
	fragment FMathcalcSubmission on FormElementMathcalcSubmissionElementValueType {
		output
	}
`}
	${_y`
	fragment FRatingSubmission on FormElementRatingSubmissionElementValueType {
		feedback
		selected
	}
`}
	${_y`
	fragment FMatrixchoiceSubmission on FormElementMatrixchoiceSubmissionElementValueType {
		selected {
			columns
			rowId
		}
	}
`}
	${_y`
	fragment FSortableSubmission on FormElementSortableSubmissionElementValueType {
		order
	}
`}
	${_y`
	fragment FDatetimeinputSubmission on FormElementDatetimeinputSubmissionElementValueType {
		input
	}
`}
	${_y`
	fragment FMatrixinputSubmission on FormElementMatrixinputSubmissionElementValueType {
		input {
			columnId
			rowId
			value
		}
	}
`}
	${_y`
	fragment FSinglecheckboxSubmission on FormElementSinglecheckboxSubmissionElementValueType {
		selected
	}
`}
	${_y`
	fragment FAddressSubmission on FormElementAddressSubmissionElementValueType {
		city
		country
		fieldOne
		fieldTwo
		state
		zip
	}
`}
`}
`,KA=_y`
	mutation CreateSubmission(
		$formId: ID!
		$urlTrack: String
		$referer: String
		$elements: [FormSubmissionElementInput!]!
		$time: Int
	) {
		createSubmission(
			data: {
				formId: $formId
				urlTrack: $urlTrack
				referer: $referer
				elements: $elements
				time: $time
			}
		) {
			...FSubmissionData
		}
	}
	${_y`
	fragment FSubmissionData on SubmissionType {
		id
		token
		fName
		lName
		email
		phone
		score
		maxScore
		scoreData {
			scoreId
			has
			obtained
			outof
		}
		paymentData
		submissionLink
	}
`}
`;function JA(c){const{children:e,themeStyle:a,error:t,retry:s,title:n,hideReload:r=!1,retryLabel:o,widthOverride:l,ssr:f=!1,type:h="500"}=c;return(0,i.jsx)(tN.F,Object.assign({themeStyle:a,widthOverride:l,ssr:f},{children:(0,i.jsx)(eN.J,{type:h,title:n,description:(0,i.jsxs)(i.Fragment,{children:[e,t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,eN._)("More information on the error can be found below.","wp-eform")},void 0),(0,i.jsx)("p",{children:t.message},void 0)]},void 0):null]},void 0),footer:!r||s?(0,i.jsxs)(i.Fragment,{children:[r?null:(0,i.jsx)(eN.K,Object.assign({style:"3d",size:eN.l.SMALL,onClick:()=>{window.location.reload()}},{children:(0,eN._)("RELOAD PAGE","wp-eform")}),void 0),s?(0,i.jsx)(eN.K,Object.assign({style:"3d",size:eN.l.SMALL,onClick:s,colorful:!1},{children:o??(0,eN._)("RETRY WITHOUT RELOAD","wp-eform")}),void 0):null]},void 0):null},void 0)}),void 0)}function cE(c){return c===eN.i.BORDER_BOX?"border-box":c===eN.i.CONTENT_BOX?"content-box":c===eN.i.PADDING_BOX?"padding-box":"border-box"}iN.ZP.div`
	margin: ${c=>(0,eN.X)(c.theme.gutter)}
		${c=>(0,eN.X)(c.theme.gutter/-2)};
`;const eE=iN.ZP.div`
	${eN.aj};
	background-image: ${c=>c.bg?.backgroundImage?`url("${c.bg.backgroundImage}")`:"none"};
	background-size: ${c=>c.bg?.backgroundSize??"auto"};
	background-position: ${c=>c.bg?.backgroundPosition??"0% 0%"};
	background-repeat: ${c=>{return e=c.bg?.backgroundRepeat,e===eN.j.REPEAT_BOTH?"repeat":e===eN.j.REPEAT_NONE?"no-repeat":e===eN.j.REPEAT_X?"repeat-x":e===eN.j.REPEAT_Y?"repeat-y":"no-repeat";var e}};
	background-origin: ${c=>cE(c.bg?.backgroundOrigin)};
	background-clip: ${c=>cE(c.bg?.backgroundClip)};
	background-attachment: ${c=>{return e=c.bg?.backgroundAttachment,e===eN.h.FIXED?"fixed":e===eN.h.LOCAL?"local":"scroll";var e}};
`;function aE(){const c=(0,eN.be)(),e=(0,eN.bf)(eN.bg),a=c.structures.find((c=>c.id===e)),t=(0,eN.bf)(eN.bh),s=(0,eN.bi)(),n=(0,eN.bj)();let r;if((0,HM.useEffect)((()=>{if(!t)return()=>{};if(c.styles?.pagination?.autoProgress){let e=!0;const i=setTimeout((()=>{if(e)if(s.canNext){const e=n.getState().elements,i=(0,eN.bk)(a,c.elements,e),[t]=(0,eN.bl)(e,i);t&&s.goNext()}else c.styles?.pagination?.autoSubmit&&s.canSubmit&&s.submit()}),c.styles.pagination.autoProgressDelay??100);return()=>{e=!1,clearTimeout(i)}}return()=>{}}),[t,c,n,s,a]),a){const c=a.children;r=(0,i.jsx)(eN.bm,{elements:c,emptyMessage:(0,eN._)("This page is empty.","wp-eform")},void 0)}else r=(0,i.jsx)(eN.ad,Object.assign({icon:(0,i.jsx)(eN.a3,{iconClass:"fas fa-envelope-open"},void 0)},{children:(0,eN._)("This page does not exist. Kindly navigate away from it.","wp-eform")}),void 0);return(0,i.jsx)(eE,Object.assign({bg:c.styles?.customBackground?.enabled?c.styles.customBackground:void 0,className:"wpeform-form-page"},{children:r}),void 0)}const iE={message:(0,eN._)("Some error has occured.","wp-eform"),dynamicAnchors:null,mentions:null,id:"unknown"};function tE(c){const{limitationMessage:e}=c,a=(0,HM.useMemo)((()=>[]),[]),t=(0,eN.bn)(e.mentions),s=(0,eN.bo)(e.dynamicAnchors),n=(0,eN.bp)(e.message);return(0,i.jsx)(eN.aF,{mode:"multiline",nodes:n||(0,eN.bq)((0,eN.ab)((0,eN._)("There has been some error related to %s.","wp-eform"),e.id??"unknown")),excludeMentionsCharacters:a,additionalMentions:t,additionalDynamicAnchorTags:s},void 0)}function sE(c){const{messageJson:e}=c,a=(0,HM.useMemo)((()=>{try{const c=JSON.parse(e??"");return"object"==typeof c&&void 0!==c.dynamicAnchors&&void 0!==c.mentions&&void 0!==c.message?c:iE}catch(c){return iE}}),[e]),t=function(){const c=(0,eN.be)().elements;return(0,HM.useCallback)((e=>c[e]?(0,i.jsx)("strong",{children:(0,i.jsx)(eN.br,{currentElementId:null,nodes:(0,eN.bs)(c[e].appearance?.title),mode:"singleline"},void 0)},void 0):null),[c])}();return(0,i.jsx)(eN.bt,Object.assign({mentions:t},{children:(0,i.jsx)(tE,{limitationMessage:a},void 0)}),void 0)}var nE=/^(?:\w+:)?\/\/(\S+)$/,rE=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,oE=/^[^\s\.]+\.\S{2,}$/,lE=function(c){if("string"!=typeof c)return!1;var e=c.match(nE);if(!e)return!1;var a=e[1];return!!a&&!(!rE.test(a)&&!oE.test(a))};function fE(c,e,a){if(!e)return"";const i=e.reduce(((c,e)=>(c[e.scoreId]=e,c)),{}),t="percentage"===a?c.scorePercentageLogic:c.scoreTotalLogic;let s="";return t.forEach((c=>{if(!c.scoreId||!i[c.scoreId]||!i[c.scoreId].has)return;const e=i[c.scoreId],t="percentage"===a?e.obtained/e.outof*100:e.obtained;t<=c.to&&t>=c.from&&(s=c.url)})),s}function hE(c){const{config:e,submissionLink:a,scoreData:t}=c;let s=e.url;const n=(0,eN.bf)(eN.bu),r=(0,eN.be)();e.type===eN.R.FLAT?s=e.url:e.type===eN.R.PORTAL?s=WPEFormGraphQLApp.userPortal:e.type===eN.R.SUBMISSION?s=a??e.url:e.type===eN.R.CONDITIONAL?s=function(c,e,a){let i="";return c.forEach((c=>{(0,eN.bw)(c.events,e,a)&&(i=c.url)})),i}(e.conditionalLogic,n,r.elements):e.type===eN.R.SCOREPERCENTAGE?s=fE(e,t,"percentage"):e.type===eN.R.SCORETOTAL&&(s=fE(e,t,"total")),""===s&&(s=e.url);const o=lE(s),l=(0,HM.useCallback)((()=>{e.iframeRedirect&&window.top!==window.self?window.top.location.href=s:window.location.href=s}),[e.iframeRedirect,s]);(0,eN.bv)(l,e.delay,!o);const f=(0,HM.useMemo)((()=>({"%REDIRECT_LINK%":s})),[s]);return o?(0,i.jsx)(eN.br,{mode:"multiline",nodes:(0,eN.bs)(e.message),currentElementId:null,additionalMentions:{"::redirectDelay::":(0,i.jsx)(Uw,{time:e.delay},void 0)},additionalAnchors:f},void 0):(0,i.jsx)("p",{children:(0,eN.ab)((0,eN._)("ERROR: The URL %s is invalid and cannot redirect. Please contact the site administrator for help.","wp-eform"),s)},void 0)}function mE(c){const{reset:e,delay:a,message:t}=c;return(0,eN.bv)(e,a),(0,i.jsx)(eN.br,{mode:"singleline",nodes:(0,eN.bs)(t),currentElementId:null,additionalMentions:{"::kioskResetTime::":(0,i.jsx)(Uw,{time:a},void 0)}},void 0)}function uE(c){const{timerConfig:e,currentPageConfig:a,goNext:t,canSubmit:s,submit:n,submitting:r,width:o,containerLayout:l}=c,f=(0,eN.bp)(e?.timerMessage),h=(0,HM.useCallback)((()=>{if((0,eN.bx)("starter")){if(r)return;if(e?.submitTimer===eN.x.OVERALL)return void n(!0);s?n(!0):t(!0)}}),[s,t,n,e,r]);if(!e||!a)return null;if(e.submitTimer===eN.x.NONE)return null;let m,u;if(e.submitTimer===eN.x.OVERALL?(m=e.timeLimit,u="overall"):(m=a.config.timer,u=a.id),!m||m<0)return null;const p=e.showTimer&&!r&&(0,eN.bx)("starter");return(0,i.jsxs)(i.Fragment,{children:[p?(0,i.jsx)(uk.Placeholder,{},void 0):null,(0,i.jsx)(eN.aE.Portal,{children:(0,i.jsx)(uk.Portal,{children:(0,i.jsx)(uk,{showUI:p,time:m,message:f?(0,i.jsx)(eN.br,{nodes:f,currentElementId:null,mode:"singleline"},void 0):void 0,onDone:h,width:o,containerLayout:l},u)},void 0)},void 0)]},void 0)}const pE=iN.ZP.div`
	padding: ${c=>(0,eN.X)(c.theme.gutter)};
	border-radius: ${c=>(0,eN.X)(c.theme.borderRadiusBase)};
	background-color: ${c=>c.theme.backgroundShade};
	margin: 0 0 ${c=>(0,eN.X)(c.theme.gutter)} 0;
`;function dE(){const c=(0,eN.aq)(),e=(0,eN.bf)(eN.by),a=(0,eN.bz)(),t=(0,HM.useCallback)((c=>{a({type:"SET_REMARKS",payload:{remarks:c}})}),[a]);return(0,i.jsx)(pE,{children:(0,i.jsx)(eN.aD,Object.assign({title:(0,eN._)("Administrator Remarks","wp-eform"),subtitle:(0,eN._)("this will show up in submission summary.","wp-eform"),id:`${c}-remarks`},{children:(0,i.jsx)(eN.aI,{value:e,onChange:t},void 0)}),void 0)},void 0)}function zE(c){const{activePage:e,onActivePageChange:a,onSubmit:t,submitting:s,submitted:n,submittedState:r,submissionError:o,onReset:l,onErrorRetry:f,limitations:h,mutationData:m,notices:u,initialData:p}=c,d=(0,eN.bz)(),z=(0,eN.bj)(),v=(0,eN.bA)(),H=(0,eN.be)(),V=(0,eN.bf)(eN.bg),M=(0,eN.bf)(eN.bB),C=(0,eN.bf)(eN.bC),[g,b]=(0,HM.useState)(!1),[L,x]=(0,HM.useState)(null),y=(0,eN.bD)(),N=(0,eN.bE)();(0,HM.useEffect)((()=>{x(null),b(!1),d({type:"SET_ELEMENTS_AND_STARTTIME",payload:{structures:(0,eN.bF)(H),elements:(0,eN.bG)(H,v,!0,p),formData:H,formMeta:v,conditionalsMap:N,fullReset:"preview"===y||"listview"===y}})}),[d,v,H,N,p,y]);const w=(0,HM.useMemo)((()=>H.structures.filter((c=>{if("preview"===y)return!0;const e=M[c.id];return!e||!e.conditionallyHidden})).map((c=>({id:c.id,title:c.config.title,subtitle:c.config.subtitle,icon:c.config.icon||void 0})))),[H.structures,y,M]);(0,HM.useEffect)((()=>{!w.find((c=>c.id===V))&&w.length&&d({type:"SET_CURRENT_PAGE",payload:w[0].id})}),[w,V,d]);const S=("newsubmission"===y||"useredit"===y)&&H.settings?.timer?.submitTimer!==eN.x.NONE,k=(0,HM.useMemo)((()=>H.structures.find((c=>c.id===V))),[V,H.structures]),A=w.findIndex((c=>c.id===V)),E=0===A?null:w[A-1]?w[A-1].id:null,T=w[A+1]?w[A+1].id:V,O=(0,HM.useCallback)(((c,e=!1)=>{const i=()=>{d({type:"SET_CURRENT_PAGE",payload:c}),a&&a(c)};if("preview"===y||H.styles?.pagination?.paginationRestriction===eN.e.NONE)return void i();if(S&&c===T&&e)return i(),b(!1),void x(null);const t=z.getState().elements,s=(0,eN.bk)(k,H.elements,t),[n,r]=(0,eN.bl)(t,s);if(w.findIndex((e=>e.id===c))<A){if(S)return;if(H.styles?.pagination?.blockPreviousNavigation)return;return H.styles?.pagination?.paginationRestriction!==eN.e.ONLY_WHEN_ALL_VALID||n?(b(!1),x(null),d({type:"SET_CURRENT_PAGE",payload:c}),void(a&&a(c))):(b(!0),void x(r))}if(n)return b(!1),x(null),d({type:"SET_CURRENT_PAGE",payload:T}),void(a&&a(T));b(!0),x(r)}),[a,y,k,A,d,H,z,w,T,S]);(0,HM.useEffect)((()=>{e&&e!==V&&d({type:"SET_CURRENT_PAGE",payload:e})}),[d,e,V]);const F=!(S||!E||H.styles?.pagination?.blockPreviousNavigation||s),_=(0,HM.useCallback)((()=>{E&&O(E)}),[E,O]),D=T!==V&&!s,j=(0,HM.useCallback)(((c=!1)=>{O(T,c)}),[O,T]),I=T===V&&!s,P=(0,HM.useCallback)(((c=!1)=>{if(S&&c)return void t(z);const e=z.getState().elements,a=(0,eN.bk)(k,H.elements,e),[i,s]=(0,eN.bl)(e,a);if(!i)return b(!0),void x(s);t(z)}),[k,H,z,t,S]),R=(!s||s&&n)&&!S,B=(0,HM.useCallback)((()=>{d({type:"SET_ELEMENTS_AND_STARTTIME",payload:{structures:(0,eN.bF)(H),elements:(0,eN.bG)(H,v,!0),formData:H,formMeta:v,conditionalsMap:N,fullReset:!0}}),x(null),b(!1);const c=w[0].id;d({type:"SET_CURRENT_PAGE",payload:c}),a&&a(c),l&&l()}),[d,H,v,a,w,l,N]),$=(0,HM.useCallback)((()=>{window.confirm(H.styles?.pagination?.resetMessage||(0,eN._)("This will reset the form. Action cannot be undone, are you sure?","wp-eform"))&&B()}),[B,H]),q=(0,HM.useMemo)((()=>({canNext:D,canPrevious:F,canSubmit:I,goNext:j,goPrevious:_,submit:P,canReset:R,reset:$,submitting:s,submitted:n,submittedState:r})),[D,F,I,j,_,P,R,$,s,n,r]),U=H.styles?.pagination?.barlike?"flat":H.styles?.pagination?.style??"flat",Z=H.styles?.pagination?.size??eN.l.DEFAULT,Q=H.styles?.pagination?.colored??!1,X=H.styles?.pagination?.rounded;let W=(0,i.jsx)(eN.K,Object.assign({style:U,size:Z,colorful:Q,icon:H.styles?.pagination?.prevIcon,iconPosition:H.styles?.pagination?.prevIconPosition===eN.B.BEFORE?"before":"after",onClick:_,rounded:X,disabled:!F},{children:H.styles?.pagination?.prevLabel}),void 0);const G="newsubmission"===y||"preview"===y||"listview"===y?"new":"update",Y="new"===G?H.styles?.pagination?.submitIconPosition:H.styles?.pagination?.updateIconPosition;let K=(0,i.jsx)(eN.K,Object.assign({style:U,size:Z,colorful:Q,icon:"new"===G?H.styles?.pagination?.submitIcon:H.styles?.pagination?.updateIcon,iconPosition:Y===eN.B.BEFORE?"before":"after",onClick:()=>{P()},rounded:X,disabled:!I,loading:s,loadingDone:n,loadedState:"success"===r?"success":"error"},{children:"new"===G?H.styles?.pagination?.submitLabel:H.styles?.pagination?.updateLabel}),void 0),J=(0,i.jsx)(eN.K,Object.assign({style:U,size:Z,colorful:Q,icon:H.styles?.pagination?.nextIcon,iconPosition:H.styles?.pagination?.nextIconPosition===eN.B.BEFORE?"before":"after",onClick:()=>{j()},rounded:X,disabled:!D},{children:H.styles?.pagination?.nextLabel}),void 0),cc=H.styles?.pagination?.showResetButton?(0,i.jsx)(eN.K,Object.assign({style:U,size:Z,colorful:Q,icon:H.styles?.pagination?.resetIcon,iconPosition:H.styles?.pagination?.resetIconPosition===eN.B.BEFORE?"before":"after",onClick:$,rounded:X,disabled:!R},{children:H.styles?.pagination?.resetLabel}),void 0):null;H.styles?.pagination?.hideWhenNotRelevant&&(F||(W=null),D?K=null:J=null,R||(cc=null)),1===H.structures.length&&(J=null,W=null);let ec=null;return s&&n&&"success"===r&&"newsubmission"===y&&(H.styles?.redirection?.type!==eN.R.NONE?ec=(0,i.jsx)(hE,{config:H.styles.redirection,submissionLink:m?.submissionLink,scoreData:m?.scoreData},void 0):!0===H.styles?.formBehavior?.kioskMode&&(ec=(0,i.jsx)(mE,{reset:B,delay:H.styles.formBehavior.kioskTime,message:H.styles.formBehavior.kioskMessage},void 0))),(0,i.jsx)(i.Fragment,{children:s&&n?(0,i.jsx)(Dw,Object.assign({type:"success"===r?"success":"error",title:"success"===r?(0,i.jsx)(eN.br,{mode:"singleline",nodes:(0,eN.bs)("useredit"===y?H.styles?.formBehavior?.updateSubject:"adminedit"===y?(0,eN._)("The submission has been updated.","wp-eform"):H.styles?.formBehavior?.subject),currentElementId:null},void 0):(0,i.jsx)(eN.br,{mode:"singleline",nodes:(0,eN.bs)(H.styles?.formBehavior?.errorSubject??(0,eN._)("Oops, we have encountered an error!","wp-eform")),currentElementId:null},void 0),footer:ec},{children:"success"===r?(0,i.jsx)(eN.br,{currentElementId:null,mode:"multiline",nodes:(0,eN.bs)("useredit"===y?H.styles?.formBehavior?.updateMessage:"adminedit"===y?(0,eN._)("We have also sent an email to the user about this update.","wp-eform"):H.styles?.formBehavior?.message)},void 0):(0,i.jsxs)(i.Fragment,{children:["submissionValidationLogic"===o?.graphQLErrors[0]?.extensions?.category?(0,i.jsx)(sE,{messageJson:o?.graphQLErrors[0]?.message??""},void 0):o?.message,f?(0,i.jsx)("p",{children:(0,i.jsx)(eN.K,Object.assign({size:Z,style:U,colorful:Q,icon:H.styles?.formBehavior?.errorRetryButtonIcon??"fas fa-sync-alt",iconPosition:H.styles?.formBehavior?.errorRetryButtonIconPosition===eN.B.AFTER?"after":"before",onClick:f,rounded:X},{children:H.styles?.formBehavior?.errorRetryButtonLabel??(0,eN._)("RETRY","wp-eform")}),void 0)},void 0):null]},void 0)}),void 0):(0,i.jsx)(eN.bH.Provider,Object.assign({value:g},{children:(0,i.jsx)(eN.bI.Provider,Object.assign({value:L},{children:(0,i.jsx)(eN.bJ.Provider,Object.assign({value:q},{children:h&&h.length>0&&"newsubmission"===y?h.map((c=>(0,i.jsx)(eN.aA.Bottom,{children:(0,i.jsx)(eN.au,Object.assign({type:"error",icon:"fas fa-times",dismissable:!1},{children:(0,i.jsx)(tE,{limitationMessage:c},void 0)}),void 0)},c.id))):(0,i.jsxs)(i.Fragment,{children:["adminedit"===y?(0,i.jsx)(dE,{},void 0):null,u&&u.length&&"newsubmission"===y?u.map((c=>(0,i.jsx)(eN.aA.Bottom,{children:(0,i.jsx)(eN.au,Object.assign({type:"regular",icon:"fas fa-exclamation",dismissable:!0},{children:(0,i.jsx)(tE,{limitationMessage:c},void 0)}),void 0)},c.id))):null,(0,i.jsxs)("form",Object.assign({method:"post",action:"",autoComplete:H.styles?.formBehavior?.disabledAutoComplete?"off":"on",onSubmit:c=>{c.preventDefault()}},{children:[(0,i.jsx)(KS,Object.assign({showTabs:H.styles?.pagination?.showTabs,currentTab:V,onTabChange:O,showProgressBar:H.styles?.pagination?.showProgressBar,showProgressLabel:H.styles?.pagination?.showProgressLabel,forceProgress:s?100:void 0,progressBarPosition:H.styles?.pagination?.progressBarPosition,progressBarPrecision:H.styles?.pagination?.progressDecimalPoint,scrollOnTabChange:H.styles?.pagination?.autoScroll,tabScrollOffset:void 0!==H.styles?.pagination?.scrollOffset?-1*H.styles.pagination.scrollOffset:-100,tabs:w,stopwatchStartTime:H.settings?.timer?.recordSubmissionTime&&H.settings.timer.showStopwatch?C:void 0,footer:H.styles?.pagination?.panelEnabled?(0,i.jsxs)(eN.ay,Object.assign({align:H.styles?.pagination?.alignment??eN.G.RIGHT,type:H.styles?.pagination?.barlike?"navbar":"regular",colorful:Q,hasGutterOnregular:!0},{children:[W,K,J,cc]}),void 0):null},{children:(0,i.jsx)(aE,{},void 0)}),void 0),"newsubmission"===y||"useredit"===y?(0,i.jsx)(uE,{timerConfig:H.settings?.timer,currentPageConfig:k,goNext:j,submit:P,canSubmit:I,width:H.styles?.appearance?.maxWidth,containerLayout:H.styles?.appearance?.containerLayout,submitting:s},void 0):null]}),void 0)]},void 0)}),void 0)}),void 0)}),void 0)},void 0)}function vE(c){const{children:e,mutationData:a}=c,t=function(c){const e=(0,eN.bf)(eN.bu),a=(0,eN.be)(),i=a.elements,t=a.settings?.score,s=(0,HM.useMemo)((()=>c?{"::fName::":c.fName,"::lName::":c.lName,"::email::":c.email,"::phone::":c.phone,"::submissionId::":c.token,"::formName::":a.name??""}:null),[c,a.name]);return(0,HM.useCallback)((a=>(0,eN.bK)(a,e,i,s,t,c?.scoreData)),[e,i,c,t,s])}(a),s=(0,HM.useMemo)((()=>{const c={};return c["%FORM_LINK%"]=window.location.href,a?.submissionLink&&(c["%SUBMISSION_LINK%"]=a.submissionLink),c}),[a]);return(0,i.jsx)(eN.bt,Object.assign({mentions:t},{children:(0,i.jsx)(eN.bL,Object.assign({dynamicAnchors:s},{children:e}),void 0)}),void 0)}function HE(c){const{formData:e,formMeta:a,mode:t,initialData:s,activePage:n,onActivePageChange:r,mutationData:o,formHeader:l=null,...f}=c,h=e.styles,m=(0,eN.bM)(h),u=(0,HM.useMemo)((()=>{const c={};return e.conditionals.forEach((e=>{e.events.forEach((a=>{c[a.fieldid]||(c[a.fieldid]=[]),c[a.fieldid].includes(e.id)||c[a.fieldid].push(e.id)}))})),c}),[e]);return(0,i.jsx)(eN.bN,Object.assign({initialData:s??{...eN.bO,currentPage:n??(e.structures&&e.structures.length?e.structures[0].id:""),startTime:Date.now()}},{children:(0,i.jsx)(eN.bP.Provider,Object.assign({value:e},{children:(0,i.jsx)(eN.bQ.Provider,Object.assign({value:a},{children:(0,i.jsx)(eN.bR.Provider,Object.assign({value:t},{children:(0,i.jsx)(eN.bS.Provider,Object.assign({value:u},{children:(0,i.jsx)(vE,Object.assign({mutationData:o},{children:(0,i.jsxs)(eN.A,Object.assign({themeStyle:m,mode:"preview"!==t?"live":"preview"},{children:[l,(0,i.jsx)(zE,Object.assign({activePage:n,onActivePageChange:r},f,{mutationData:o,initialData:s}),void 0)]}),void 0)}),void 0)}),void 0)}),void 0)}),void 0)}),void 0)}),void 0)}function VE(c){const{id:e,panels:a=2,controls:t=3,themeStyle:s,mode:n="newsubmission",inShadow:r=!1,cssHandles:o=[],ssr:l=!1,increaseViewCount:f=!1}=c;(0,HM.useEffect)((()=>{const c=(0,eN.bV)();if(c.includes("from_admin=true")){const e=c.replace("?from_admin=true","").replace("from_admin=true","");window.history.replaceState(null,document.title,e)}}),[]);const{data:h,loading:m,error:u,refetch:p}=Gy(YA,{fetchPolicy:"cache-first",variables:{id:e,increaseViewCount:f}}),d=(0,eN.b8)(((c,e)=>{e({id:c})}),500);(0,HM.useEffect)((()=>{const c=c=>{c.data&&"wpeform:: refresh form"===c.data&&(eN.bW.l("refreshing form"),d(e,p))};return window.addEventListener("message",c),()=>{window.removeEventListener("message",c)}}),[e,d,p]);const[z,v]=function(c,e){var a=Xy(null==e?void 0:e.client);Qy(c,By.Mutation);var i=(0,HM.useState)({called:!1,loading:!1,client:a}),t=i[0],s=i[1],n=(0,HM.useRef)({result:t,mutationId:0,isMounted:!0,client:a,mutation:c,options:e});Object.assign(n.current,{client:a,options:e,mutation:c});var r=(0,HM.useCallback)((function(c){void 0===c&&(c={});var e=n.current,a=e.client,i=e.options,t=e.mutation,r=gM(gM({},i),{mutation:t});n.current.result.loading||r.ignoreResults||!n.current.isMounted||s(n.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:a});var o=++n.current.mutationId,l=Xx(r,c);return a.mutate(l).then((function(e){var i,t=e.data,r=e.errors,f=r&&r.length>0?new Ax({graphQLErrors:r}):void 0;if(o===n.current.mutationId&&!l.ignoreResults){var h={called:!0,loading:!1,data:t,error:f,client:a};n.current.isMounted&&!PC(n.current.result,h)&&s(n.current.result=h)}var m=c.onCompleted||(null===(i=n.current.options)||void 0===i?void 0:i.onCompleted);return null==m||m(e.data,l),e})).catch((function(e){var i;if(o===n.current.mutationId&&n.current.isMounted){var t={loading:!1,error:e,data:void 0,called:!0,client:a};PC(n.current.result,t)||s(n.current.result=t)}var r=c.onError||(null===(i=n.current.options)||void 0===i?void 0:i.onError);if(r)return r(e,l),{data:void 0,errors:e};throw e}))}),[]),o=(0,HM.useCallback)((function(){n.current.isMounted&&s({called:!1,loading:!1,client:a})}),[]);return(0,HM.useEffect)((function(){return n.current.isMounted=!0,function(){n.current.isMounted=!1}}),[]),[r,gM({reset:o},t)]}(KA,{fetchPolicy:"no-cache"}),H=(0,HM.useMemo)((()=>{let c=null;if((0,eN.bx)("starter"))try{if(h?.form.styles?.tracking?.urlTracking){const e=h.form.styles.tracking.urlTrackId,a=aN.parse(window.location.search);if(a[e]){const i=a[e];"string"==typeof i&&(c=i)}}return c}catch{return null}return null}),[h]),V=(0,HM.useCallback)(((c,a)=>z({variables:{formId:e,elements:c,referer:window.location.href,time:a,urlTrack:H}})),[e,z,H]),M=(0,HM.useMemo)((()=>h?(0,eN.bT)(h):null),[h]),{submitting:C,submitted:g,reset:b,submit:L,submittedState:x}=(0,eN.bU)(V,M,"preview"!==n&&"listview"!==n),y=(0,i.jsx)(eN.y,Object.assign({inShadow:r,cssHandles:o},{children:(0,i.jsx)(tN.F,Object.assign({themeStyle:s,ssr:l},{children:"listview"===n||"preview"===n?(0,i.jsx)(LS,{},void 0):(0,i.jsx)(eN.z,{panels:a,controls:t},void 0)}),void 0)}),void 0);return m?y:u?(0,i.jsx)(eN.y,Object.assign({inShadow:r,cssHandles:o},{children:(0,i.jsx)(JA,Object.assign({ssr:l,themeStyle:s,retry:()=>{p({id:e})},error:u,title:(0,eN._)("A server side error has occured","wp-eform")},{children:(0,i.jsx)("p",{children:(0,eN._)("There was an error trying to fetch form data from the server. Try refreshing the page to see if that resolves it.","wp-eform")},void 0)}),void 0)}),void 0):(0,i.jsx)(eN.y,Object.assign({inShadow:r,cssHandles:o},{children:(0,i.jsx)(tN.a,Object.assign({themeStyle:s},{children:(0,i.jsx)(HE,{formData:M,formMeta:h.formMeta,mode:n,submitting:C,submitted:g,submittedState:x,onReset:b,onSubmit:L,submissionError:v&&v.error?v.error:void 0,mutationData:v.data?.createSubmission??void 0,limitations:h?.form.limitations,notices:h?.form.notices,onErrorRetry:b},void 0)}),void 0)}),void 0)}const ME={id:"range",hasSubmission:!0,neededPlan:"starter",FormUi({elementData:c,setElementTouched:e,submissionData:a,updateSubmissionData:t,controlType:s,hasError:n}){const r=c.config.range;let o;return r?.interface?.showMarks&&(o=!0,r.interface.customMarks.length&&(o=r.interface.customMarks.map((c=>({index:c.index,label:c.label??""}))))),(0,eN.bx)("starter")?(0,i.jsx)(eN.aH,{max:r?.interface?.max??10,min:r?.interface?.min??0,step:r?.interface?.step??1,precision:r?.interface?.precision??2,type:"range",onChange:c=>{t((0,eN.bX)(a,(e=>{const a=Math.min(...c),i=Math.max(...c);e.value.range.minSelected=a,e.value.range.maxSelected=i})))},value:[a.value.range.minSelected,a.value.range.maxSelected],controlType:s,disabled:r?.attributes.readonly,marks:o,hasError:n,className:c.appearance?.className,onBlur:()=>{e(!0)},showFreeInput:r?.interface?.showFreeInput},void 0):(0,i.jsx)("p",{children:"Not implemented in current plan"},void 0)},getErrors(c,e){const a=[],i=e.range.minSelected,t=e.range.maxSelected,s=c.config.range.interface;return s?(i>t&&a.push(eN.bY.rangeInvariant.replaceAll("{min}",i.toString()).replaceAll("{max}",t.toString())),s.min&&(i<s.min||t<s.min)&&a.push(eN.bY.sliderMinUnderFlow.replaceAll("{min}",(0,eN.aZ)(s.min,2))),s.max&&(i>s.max||t>s.max)&&a.push(eN.bY.sliderMaxOverFlow.replaceAll("{max}",(0,eN.aZ)(s.max,2))),(0,eN.bZ)(i,s.step,s.min,s.precision)||a.push(eN.bY.rangeStepOverFlow.replaceAll("{value}",(0,eN.aZ)(i,s.precision)).replaceAll("{step}",(0,eN.aZ)(s.step,2))),(0,eN.bZ)(t,s.step,s.min,s.precision)||a.push(eN.bY.rangeStepOverFlow.replaceAll("{value}",(0,eN.aZ)(t,s.precision)).replaceAll("{step}",(0,eN.aZ)(s.step,2))),a):a},isQuestion:!0,isRequired:c=>!1,setValue(c,e,a){const i=c.split("/");if(2!==i.length)return;const t=(0,eN.b_)(i[0],e.config.range?.interface?.min),s=(0,eN.b_)(i[1],t);a.range.minSelected=t,a.range.maxSelected=s},isConditionTrue(c,e,a,i,t){let s=!1;const n=(0,eN.b_)(i,Number.NaN);if(Number.isNaN(n))return eN.bW.l(`%c ERROR %c conditional operation on range assumes numeric value. '${i}' given.`,eN.bW.style.error,eN.bW.style.reset),!1;const r=t.range.minSelected,o=t.range.maxSelected;return a===eN.E.EQUALS_TO?s=r===n||o===n:a===eN.E.GREATER_THAN?s=o>n:a===eN.E.LESS_THAN&&(s=r<n),e===eN.c.IS?s:!s},getDisplayValue(c,e){const a=e.range.minSelected,i=e.range.maxSelected;return`${(0,eN.aZ)(a,c.config.range?.interface?.precision??2)}${c.config.range?.interface?.separator??"-"}${(0,eN.aZ)(i,c.config.range?.interface?.precision??2)}`},getNumericValue:(c,e)=>((0,eN.b_)(e.range.minSelected)+(0,eN.b_)(e.range.maxSelected))/2,getAnswerValue(c,e){const a=e.range.minSelected,i=e.range.maxSelected;return`${(0,eN.aZ)(a,c.config.range?.interface?.precision??2)}${c.config.range?.interface?.separator??"/"}${(0,eN.aZ)(i,c.config.range?.interface?.precision??2)}`},getPresetValue(c,e){const a=c.config.range?.interface?.min??0;return(0,eN.bX)(e,(e=>{let i="";if((0,eN.b$)(c.config.range?.attributes.defaultValue)||(i=c.config.range?.attributes.defaultValue??""),c.config.range?.attributes.prefilType===eN.n.URL){const e=(0,eN.c0)(window.location.search,c.config.range.attributes.prefilParameter);"string"==typeof e&&(i=e)}if(i){const c=i.split("/");if(2===c.length){const i=(0,eN.b_)(c[0],a);e.range.minSelected=i,e.range.maxSelected=(0,eN.b_)(c[1],i)}}if(c.config.range?.attributes.prefilType===eN.n.META){const i=(0,eN.c1)(c.extras);if(i&&i.metaValue){const c=i.metaValue;"object"==typeof c&&(e.range.minSelected=c.minSelected??a,e.range.maxSelected=c.maxSelected??0)}}e.range.minSelected<a&&(e.range.minSelected=a),e.range.maxSelected<e.range.minSelected&&(e.range.maxSelected=e.range.minSelected),e.range.minSelected===e.range.maxSelected&&(e.range.maxSelected=e.range.minSelected+(c.config.range?.interface?.step??1))}))}};var CE="INUMBER",gE="IOP1",bE="IOP2",LE="IOP3",xE="IVAR",yE="IVARNAME",NE="IFUNCALL",wE="IFUNDEF",SE="IEXPR",kE="IEXPREVAL",AE="IMEMBER",EE="IENDSTATEMENT",TE="IARRAY";function OE(c,e){this.type=c,this.value=null!=e?e:0}function FE(c){return new OE(gE,c)}function _E(c){return new OE(bE,c)}function DE(c){return new OE(LE,c)}function jE(c,e,a,i,t){for(var s,n,r,o,l=[],f=[],h=0;h<c.length;h++){var m=c[h],u=m.type;if(u===CE||u===yE)Array.isArray(m.value)?l.push.apply(l,jE(m.value.map((function(c){return new OE(CE,c)})).concat(new OE(TE,m.value.length)),e,a,i,t)):l.push(m);else if(u===xE&&t.hasOwnProperty(m.value))m=new OE(CE,t[m.value]),l.push(m);else if(u===bE&&l.length>1)n=l.pop(),s=l.pop(),o=a[m.value],m=new OE(CE,o(s.value,n.value)),l.push(m);else if(u===LE&&l.length>2)r=l.pop(),n=l.pop(),s=l.pop(),"?"===m.value?l.push(s.value?n.value:r.value):(o=i[m.value],m=new OE(CE,o(s.value,n.value,r.value)),l.push(m));else if(u===gE&&l.length>0)s=l.pop(),o=e[m.value],m=new OE(CE,o(s.value)),l.push(m);else if(u===SE){for(;l.length>0;)f.push(l.shift());f.push(new OE(SE,jE(m.value,e,a,i,t)))}else if(u===AE&&l.length>0)s=l.pop(),l.push(new OE(CE,s.value[m.value]));else{for(;l.length>0;)f.push(l.shift());f.push(m)}}for(;l.length>0;)f.push(l.shift());return f}function IE(c,e,a){for(var i=[],t=0;t<c.length;t++){var s=c[t],n=s.type;if(n===xE&&s.value===e)for(var r=0;r<a.tokens.length;r++){var o,l=a.tokens[r];o=l.type===gE?FE(l.value):l.type===bE?_E(l.value):l.type===LE?DE(l.value):new OE(l.type,l.value),i.push(o)}else n===SE?i.push(new OE(SE,IE(s.value,e,a))):i.push(s)}return i}function PE(c,e,a){var i,t,s,n,r,o,l=[];if(BE(c))return $E(c,a);for(var f=c.length,h=0;h<f;h++){var m=c[h],u=m.type;if(u===CE||u===yE)l.push(m.value);else if(u===bE)t=l.pop(),i=l.pop(),"and"===m.value?l.push(!!i&&!!PE(t,e,a)):"or"===m.value?l.push(!!i||!!PE(t,e,a)):"="===m.value?(n=e.binaryOps[m.value],l.push(n(i,PE(t,e,a),a))):(n=e.binaryOps[m.value],l.push(n($E(i,a),$E(t,a))));else if(u===LE)s=l.pop(),t=l.pop(),i=l.pop(),"?"===m.value?l.push(PE(i?t:s,e,a)):(n=e.ternaryOps[m.value],l.push(n($E(i,a),$E(t,a),$E(s,a))));else if(u===xE)if(m.value in e.functions)l.push(e.functions[m.value]);else if(m.value in e.unaryOps&&e.parser.isOperatorEnabled(m.value))l.push(e.unaryOps[m.value]);else{var p=a[m.value];if(void 0===p)throw new Error("undefined variable: "+m.value);l.push(p)}else if(u===gE)i=l.pop(),n=e.unaryOps[m.value],l.push(n($E(i,a)));else if(u===NE){for(o=m.value,r=[];o-- >0;)r.unshift($E(l.pop(),a));if(!(n=l.pop()).apply||!n.call)throw new Error(n+" is not a function");l.push(n.apply(void 0,r))}else if(u===wE)l.push(function(){for(var c=l.pop(),i=[],t=m.value;t-- >0;)i.unshift(l.pop());var s=l.pop(),n=function(){for(var t=Object.assign({},a),s=0,n=i.length;s<n;s++)t[i[s]]=arguments[s];return PE(c,e,t)};return Object.defineProperty(n,"name",{value:s,writable:!1}),a[s]=n,n}());else if(u===SE)l.push(RE(m,e));else if(u===kE)l.push(m);else if(u===AE)i=l.pop(),l.push(i[m.value]);else if(u===EE)l.pop();else{if(u!==TE)throw new Error("invalid Expression");for(o=m.value,r=[];o-- >0;)r.unshift(l.pop());l.push(r)}}if(l.length>1)throw new Error("invalid Expression (parity)");return 0===l[0]?0:$E(l[0],a)}function RE(c,e,a){return BE(c)?c:{type:kE,value:function(a){return PE(c.value,e,a)}}}function BE(c){return c&&c.type===kE}function $E(c,e){return BE(c)?c.value(e):c}function qE(c,e){for(var a,i,t,s,n,r,o=[],l=0;l<c.length;l++){var f=c[l],h=f.type;if(h===CE)"number"==typeof f.value&&f.value<0?o.push("("+f.value+")"):Array.isArray(f.value)?o.push("["+f.value.map(UE).join(", ")+"]"):o.push(UE(f.value));else if(h===bE)i=o.pop(),a=o.pop(),s=f.value,e?"^"===s?o.push("Math.pow("+a+", "+i+")"):"and"===s?o.push("(!!"+a+" && !!"+i+")"):"or"===s?o.push("(!!"+a+" || !!"+i+")"):"||"===s?o.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+a+"),("+i+")))"):"=="===s?o.push("("+a+" === "+i+")"):"!="===s?o.push("("+a+" !== "+i+")"):"["===s?o.push(a+"[("+i+") | 0]"):o.push("("+a+" "+s+" "+i+")"):"["===s?o.push(a+"["+i+"]"):o.push("("+a+" "+s+" "+i+")");else if(h===LE){if(t=o.pop(),i=o.pop(),a=o.pop(),"?"!==(s=f.value))throw new Error("invalid Expression");o.push("("+a+" ? "+i+" : "+t+")")}else if(h===xE||h===yE)o.push(f.value);else if(h===gE)a=o.pop(),"-"===(s=f.value)||"+"===s?o.push("("+s+a+")"):e?"not"===s?o.push("(!"+a+")"):"!"===s?o.push("fac("+a+")"):o.push(s+"("+a+")"):"!"===s?o.push("("+a+"!)"):o.push("("+s+" "+a+")");else if(h===NE){for(r=f.value,n=[];r-- >0;)n.unshift(o.pop());s=o.pop(),o.push(s+"("+n.join(", ")+")")}else if(h===wE){for(i=o.pop(),r=f.value,n=[];r-- >0;)n.unshift(o.pop());a=o.pop(),e?o.push("("+a+" = function("+n.join(", ")+") { return "+i+" })"):o.push("("+a+"("+n.join(", ")+") = "+i+")")}else if(h===AE)a=o.pop(),o.push(a+"."+f.value);else if(h===TE){for(r=f.value,n=[];r-- >0;)n.unshift(o.pop());o.push("["+n.join(", ")+"]")}else if(h===SE)o.push("("+qE(f.value,e)+")");else if(h!==EE)throw new Error("invalid Expression")}return o.length>1&&(o=e?[o.join(",")]:[o.join(";")]),String(o[0])}function UE(c){return"string"==typeof c?JSON.stringify(c).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):c}function ZE(c,e){for(var a=0;a<c.length;a++)if(c[a]===e)return!0;return!1}function QE(c,e,a){for(var i=!!(a=a||{}).withMembers,t=null,s=0;s<c.length;s++){var n=c[s];n.type===xE||n.type===yE?i||ZE(e,n.value)?null!==t?(ZE(e,t)||e.push(t),t=n.value):t=n.value:e.push(n.value):n.type===AE&&i&&null!==t?t+="."+n.value:n.type===SE?QE(n.value,e,a):null!==t&&(ZE(e,t)||e.push(t),t=null)}null===t||ZE(e,t)||e.push(t)}function XE(c,e){this.tokens=c,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}OE.prototype.toString=function(){switch(this.type){case CE:case gE:case bE:case LE:case xE:case yE:case EE:return this.value;case NE:return"CALL "+this.value;case wE:return"DEF "+this.value;case TE:return"ARRAY "+this.value;case AE:return"."+this.value;default:return"Invalid Instruction"}},XE.prototype.simplify=function(c){return c=c||{},new XE(jE(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,c),this.parser)},XE.prototype.substitute=function(c,e){return e instanceof XE||(e=this.parser.parse(String(e))),new XE(IE(this.tokens,c,e),this.parser)},XE.prototype.evaluate=function(c){return c=c||{},PE(this.tokens,this,c)},XE.prototype.toString=function(){return qE(this.tokens,!1)},XE.prototype.symbols=function(c){c=c||{};var e=[];return QE(this.tokens,e,c),e},XE.prototype.variables=function(c){c=c||{};var e=[];QE(this.tokens,e,c);var a=this.functions;return e.filter((function(c){return!(c in a)}))},XE.prototype.toJSFunction=function(c,e){var a=this,i=new Function(c,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+qE(this.simplify(e).tokens,!0)+"; }");return function(){return i.apply(a,arguments)}};var WE="TEOF",GE="TOP",YE="TNUMBER",KE="TSTRING",JE="TPAREN",cT="TBRACKET",eT="TCOMMA",aT="TNAME",iT="TSEMICOLON";function tT(c,e,a){this.type=c,this.value=e,this.index=a}function sT(c,e){this.pos=0,this.current=null,this.unaryOps=c.unaryOps,this.binaryOps=c.binaryOps,this.ternaryOps=c.ternaryOps,this.consts=c.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=c.options,this.parser=c}tT.prototype.toString=function(){return this.type+": "+this.value},sT.prototype.newToken=function(c,e,a){return new tT(c,e,null!=a?a:this.pos)},sT.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},sT.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},sT.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(WE,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},sT.prototype.isString=function(){var c=!1,e=this.pos,a=this.expression.charAt(e);if("'"===a||'"'===a)for(var i=this.expression.indexOf(a,e+1);i>=0&&this.pos<this.expression.length;){if(this.pos=i+1,"\\"!==this.expression.charAt(i-1)){var t=this.expression.substring(e+1,i);this.current=this.newToken(KE,this.unescape(t),e),c=!0;break}i=this.expression.indexOf(a,i+1)}return c},sT.prototype.isParen=function(){var c=this.expression.charAt(this.pos);return("("===c||")"===c)&&(this.current=this.newToken(JE,c),this.pos++,!0)},sT.prototype.isBracket=function(){var c=this.expression.charAt(this.pos);return!("["!==c&&"]"!==c||!this.isOperatorEnabled("[")||(this.current=this.newToken(cT,c),this.pos++,0))},sT.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(eT,","),this.pos++,!0)},sT.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(iT,";"),this.pos++,!0)},sT.prototype.isConst=function(){for(var c=this.pos,e=c;e<this.expression.length;e++){var a=this.expression.charAt(e);if(a.toUpperCase()===a.toLowerCase()&&(e===this.pos||"_"!==a&&"."!==a&&(a<"0"||a>"9")))break}if(e>c){var i=this.expression.substring(c,e);if(i in this.consts)return this.current=this.newToken(YE,this.consts[i]),this.pos+=i.length,!0}return!1},sT.prototype.isNamedOp=function(){for(var c=this.pos,e=c;e<this.expression.length;e++){var a=this.expression.charAt(e);if(a.toUpperCase()===a.toLowerCase()&&(e===this.pos||"_"!==a&&(a<"0"||a>"9")))break}if(e>c){var i=this.expression.substring(c,e);if(this.isOperatorEnabled(i)&&(i in this.binaryOps||i in this.unaryOps||i in this.ternaryOps))return this.current=this.newToken(GE,i),this.pos+=i.length,!0}return!1},sT.prototype.isName=function(){for(var c=this.pos,e=c,a=!1;e<this.expression.length;e++){var i=this.expression.charAt(e);if(i.toUpperCase()===i.toLowerCase()){if(e===this.pos&&("$"===i||"_"===i)){"_"===i&&(a=!0);continue}if(e===this.pos||!a||"_"!==i&&(i<"0"||i>"9"))break}else a=!0}if(a){var t=this.expression.substring(c,e);return this.current=this.newToken(aT,t),this.pos+=t.length,!0}return!1},sT.prototype.isWhitespace=function(){for(var c=!1,e=this.expression.charAt(this.pos);!(" "!==e&&"\t"!==e&&"\n"!==e&&"\r"!==e||(c=!0,this.pos++,this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return c};var nT=/^[0-9a-f]{4}$/i;function rT(c,e,a){this.parser=c,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==a.allowMemberAccess}sT.prototype.unescape=function(c){var e=c.indexOf("\\");if(e<0)return c;for(var a=c.substring(0,e);e>=0;){var i=c.charAt(++e);switch(i){case"'":a+="'";break;case'"':a+='"';break;case"\\":a+="\\";break;case"/":a+="/";break;case"b":a+="\b";break;case"f":a+="\f";break;case"n":a+="\n";break;case"r":a+="\r";break;case"t":a+="\t";break;case"u":var t=c.substring(e+1,e+5);nT.test(t)||this.parseError("Illegal escape sequence: \\u"+t),a+=String.fromCharCode(parseInt(t,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+i+'"')}++e;var s=c.indexOf("\\",e);a+=c.substring(e,s<0?c.length:s),e=s}return a},sT.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},sT.prototype.isRadixInteger=function(){var c,e,a=this.pos;if(a>=this.expression.length-2||"0"!==this.expression.charAt(a))return!1;if(++a,"x"===this.expression.charAt(a))c=16,e=/^[0-9a-f]$/i,++a;else{if("b"!==this.expression.charAt(a))return!1;c=2,e=/^[01]$/i,++a}for(var i=!1,t=a;a<this.expression.length;){var s=this.expression.charAt(a);if(!e.test(s))break;a++,i=!0}return i&&(this.current=this.newToken(YE,parseInt(this.expression.substring(t,a),c)),this.pos=a),i},sT.prototype.isNumber=function(){for(var c,e=!1,a=this.pos,i=a,t=a,s=!1,n=!1;a<this.expression.length&&((c=this.expression.charAt(a))>="0"&&c<="9"||!s&&"."===c);)"."===c?s=!0:n=!0,a++,e=n;if(e&&(t=a),"e"===c||"E"===c){a++;for(var r=!0,o=!1;a<this.expression.length;){if(c=this.expression.charAt(a),!r||"+"!==c&&"-"!==c){if(!(c>="0"&&c<="9"))break;o=!0,r=!1}else r=!1;a++}o||(a=t)}return e?(this.current=this.newToken(YE,parseFloat(this.expression.substring(i,a))),this.pos=a):this.pos=t,e},sT.prototype.isOperator=function(){var c=this.pos,e=this.expression.charAt(this.pos);if("+"===e||"-"===e||"*"===e||"/"===e||"%"===e||"^"===e||"?"===e||":"===e||"."===e)this.current=this.newToken(GE,e);else if("∙"===e||"•"===e)this.current=this.newToken(GE,"*");else if(">"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(GE,">="),this.pos++):this.current=this.newToken(GE,">");else if("<"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(GE,"<="),this.pos++):this.current=this.newToken(GE,"<");else if("|"===e){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(GE,"||"),this.pos++}else if("="===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(GE,"=="),this.pos++):this.current=this.newToken(GE,e);else{if("!"!==e)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(GE,"!="),this.pos++):this.current=this.newToken(GE,e)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=c,!1)},sT.prototype.isOperatorEnabled=function(c){return this.parser.isOperatorEnabled(c)},sT.prototype.getCoordinates=function(){var c,e=0,a=-1;do{e++,c=this.pos-a,a=this.expression.indexOf("\n",a+1)}while(a>=0&&a<this.pos);return{line:e,column:c}},sT.prototype.parseError=function(c){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+c)},rT.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},rT.prototype.tokenMatches=function(c,e){return void 0===e||(Array.isArray(e)?ZE(e,c.value):"function"==typeof e?e(c):c.value===e)},rT.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},rT.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},rT.prototype.accept=function(c,e){return!(this.nextToken.type!==c||!this.tokenMatches(this.nextToken,e)||(this.next(),0))},rT.prototype.expect=function(c,e){if(!this.accept(c,e)){var a=this.tokens.getCoordinates();throw new Error("parse error ["+a.line+":"+a.column+"]: Expected "+(e||c))}},rT.prototype.parseAtom=function(c){var e=this.tokens.unaryOps;if(this.accept(aT)||this.accept(GE,(function(c){return c.value in e})))c.push(new OE(xE,this.current.value));else if(this.accept(YE))c.push(new OE(CE,this.current.value));else if(this.accept(KE))c.push(new OE(CE,this.current.value));else if(this.accept(JE,"("))this.parseExpression(c),this.expect(JE,")");else{if(!this.accept(cT,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(cT,"]"))c.push(new OE(TE,0));else{var a=this.parseArrayList(c);c.push(new OE(TE,a))}}},rT.prototype.parseExpression=function(c){var e=[];this.parseUntilEndStatement(c,e)||(this.parseVariableAssignmentExpression(e),this.parseUntilEndStatement(c,e)||this.pushExpression(c,e))},rT.prototype.pushExpression=function(c,e){for(var a=0,i=e.length;a<i;a++)c.push(e[a])},rT.prototype.parseUntilEndStatement=function(c,e){return!!this.accept(iT)&&(!this.nextToken||this.nextToken.type===WE||this.nextToken.type===JE&&")"===this.nextToken.value||e.push(new OE(EE)),this.nextToken.type!==WE&&this.parseExpression(e),c.push(new OE(SE,e)),!0)},rT.prototype.parseArrayList=function(c){for(var e=0;!this.accept(cT,"]");)for(this.parseExpression(c),++e;this.accept(eT);)this.parseExpression(c),++e;return e},rT.prototype.parseVariableAssignmentExpression=function(c){for(this.parseConditionalExpression(c);this.accept(GE,"=");){var e=c.pop(),a=[],i=c.length-1;if(e.type!==NE){if(e.type!==xE&&e.type!==AE)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(a),c.push(new OE(yE,e.value)),c.push(new OE(SE,a)),c.push(_E("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var t=0,s=e.value+1;t<s;t++){var n=i-t;c[n].type===xE&&(c[n]=new OE(yE,c[n].value))}this.parseVariableAssignmentExpression(a),c.push(new OE(SE,a)),c.push(new OE(wE,e.value))}}},rT.prototype.parseConditionalExpression=function(c){for(this.parseOrExpression(c);this.accept(GE,"?");){var e=[],a=[];this.parseConditionalExpression(e),this.expect(GE,":"),this.parseConditionalExpression(a),c.push(new OE(SE,e)),c.push(new OE(SE,a)),c.push(DE("?"))}},rT.prototype.parseOrExpression=function(c){for(this.parseAndExpression(c);this.accept(GE,"or");){var e=[];this.parseAndExpression(e),c.push(new OE(SE,e)),c.push(_E("or"))}},rT.prototype.parseAndExpression=function(c){for(this.parseComparison(c);this.accept(GE,"and");){var e=[];this.parseComparison(e),c.push(new OE(SE,e)),c.push(_E("and"))}};var oT=["==","!=","<","<=",">=",">","in"];rT.prototype.parseComparison=function(c){for(this.parseAddSub(c);this.accept(GE,oT);){var e=this.current;this.parseAddSub(c),c.push(_E(e.value))}};var lT=["+","-","||"];rT.prototype.parseAddSub=function(c){for(this.parseTerm(c);this.accept(GE,lT);){var e=this.current;this.parseTerm(c),c.push(_E(e.value))}};var fT=["*","/","%"];function hT(c,e){return Number(c)+Number(e)}function mT(c,e){return c-e}function uT(c,e){return c*e}function pT(c,e){return c/e}function dT(c,e){return c%e}function zT(c,e){return Array.isArray(c)&&Array.isArray(e)?c.concat(e):""+c+e}function vT(c,e){return c===e}function HT(c,e){return c!==e}function VT(c,e){return c>e}function MT(c,e){return c<e}function CT(c,e){return c>=e}function gT(c,e){return c<=e}function bT(c,e){return Boolean(c&&e)}function LT(c,e){return Boolean(c||e)}function xT(c,e){return ZE(e,c)}function yT(c){return(Math.exp(c)-Math.exp(-c))/2}function NT(c){return(Math.exp(c)+Math.exp(-c))/2}function wT(c){return c===1/0?1:c===-1/0?-1:(Math.exp(c)-Math.exp(-c))/(Math.exp(c)+Math.exp(-c))}function ST(c){return c===-1/0?c:Math.log(c+Math.sqrt(c*c+1))}function kT(c){return Math.log(c+Math.sqrt(c*c-1))}function AT(c){return Math.log((1+c)/(1-c))/2}function ET(c){return Math.log(c)*Math.LOG10E}function TT(c){return-c}function OT(c){return!c}function FT(c){return c<0?Math.ceil(c):Math.floor(c)}function _T(c){return Math.random()*(c||1)}function DT(c){return PT(c+1)}rT.prototype.parseTerm=function(c){for(this.parseFactor(c);this.accept(GE,fT);){var e=this.current;this.parseFactor(c),c.push(_E(e.value))}},rT.prototype.parseFactor=function(c){var e=this.tokens.unaryOps;if(this.save(),this.accept(GE,(function(c){return c.value in e}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===JE&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(c);if(this.nextToken.type===iT||this.nextToken.type===eT||this.nextToken.type===WE||this.nextToken.type===JE&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(c)}var a=this.current;this.parseFactor(c),c.push(FE(a.value))}else this.parseExponential(c)},rT.prototype.parseExponential=function(c){for(this.parsePostfixExpression(c);this.accept(GE,"^");)this.parseFactor(c),c.push(_E("^"))},rT.prototype.parsePostfixExpression=function(c){for(this.parseFunctionCall(c);this.accept(GE,"!");)c.push(FE("!"))},rT.prototype.parseFunctionCall=function(c){var e=this.tokens.unaryOps;if(this.accept(GE,(function(c){return c.value in e}))){var a=this.current;this.parseAtom(c),c.push(FE(a.value))}else for(this.parseMemberExpression(c);this.accept(JE,"(");)if(this.accept(JE,")"))c.push(new OE(NE,0));else{var i=this.parseArgumentList(c);c.push(new OE(NE,i))}},rT.prototype.parseArgumentList=function(c){for(var e=0;!this.accept(JE,")");)for(this.parseExpression(c),++e;this.accept(eT);)this.parseExpression(c),++e;return e},rT.prototype.parseMemberExpression=function(c){for(this.parseAtom(c);this.accept(GE,".")||this.accept(cT,"[");){var e=this.current;if("."===e.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(aT),c.push(new OE(AE,this.current.value))}else{if("["!==e.value)throw new Error("unexpected symbol: "+e.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(c),this.expect(cT,"]"),c.push(_E("["))}}};var jT=4.7421875,IT=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function PT(c){var e,a;if(function(c){return isFinite(c)&&c===Math.round(c)}(c)){if(c<=0)return isFinite(c)?1/0:NaN;if(c>171)return 1/0;for(var i=c-2,t=c-1;i>1;)t*=i,i--;return 0===t&&(t=1),t}if(c<.5)return Math.PI/(Math.sin(Math.PI*c)*PT(1-c));if(c>=171.35)return 1/0;if(c>85){var s=c*c,n=s*c,r=n*c,o=r*c;return Math.sqrt(2*Math.PI/c)*Math.pow(c/Math.E,c)*(1+1/(12*c)+1/(288*s)-139/(51840*n)-571/(2488320*r)+163879/(209018880*o)+5246819/(75246796800*o*c))}--c,a=IT[0];for(var l=1;l<IT.length;++l)a+=IT[l]/(c+l);return e=c+jT+.5,Math.sqrt(2*Math.PI)*Math.pow(e,c+.5)*Math.exp(-e)*a}function RT(c){return Array.isArray(c)?c.length:String(c).length}function BT(){for(var c=0,e=0,a=0;a<arguments.length;a++){var i,t=Math.abs(arguments[a]);e<t?(c=c*(i=e/t)*i+1,e=t):c+=t>0?(i=t/e)*i:t}return e===1/0?1/0:e*Math.sqrt(c)}function $T(c,e,a){return c?e:a}function qT(c,e){return void 0===e||0==+e?Math.round(c):(c=+c,e=-+e,isNaN(c)||"number"!=typeof e||e%1!=0?NaN:(c=c.toString().split("e"),+((c=(c=Math.round(+(c[0]+"e"+(c[1]?+c[1]-e:-e)))).toString().split("e"))[0]+"e"+(c[1]?+c[1]+e:e))))}function UT(c,e,a){return a&&(a[c]=e),e}function ZT(c,e){return c[0|e]}function QT(c){return 1===arguments.length&&Array.isArray(c)?Math.max.apply(Math,c):Math.max.apply(Math,arguments)}function XT(c){return 1===arguments.length&&Array.isArray(c)?Math.min.apply(Math,c):Math.min.apply(Math,arguments)}function WT(c,e){if("function"!=typeof c)throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map((function(e,a){return c(e,a)}))}function GT(c,e,a){if("function"!=typeof c)throw new Error("First argument to fold is not a function");if(!Array.isArray(a))throw new Error("Second argument to fold is not an array");return a.reduce((function(e,a,i){return c(e,a,i)}),e)}function YT(c,e){if("function"!=typeof c)throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter((function(e,a){return c(e,a)}))}function KT(c,e){if(!Array.isArray(e)&&"string"!=typeof e)throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(c)}function JT(c,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(c)}function cO(c){return(c>0)-(c<0)||+c}var eO=1/3;function aO(c){return c<0?-Math.pow(-c,eO):Math.pow(c,eO)}function iO(c){return Math.exp(c)-1}function tO(c){return Math.log(1+c)}function sO(c){return Math.log(c)/Math.LN2}function nO(c){this.options=c||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||yT,cosh:Math.cosh||NT,tanh:Math.tanh||wT,asinh:Math.asinh||ST,acosh:Math.acosh||kT,atanh:Math.atanh||AT,sqrt:Math.sqrt,cbrt:Math.cbrt||aO,log:Math.log,log2:Math.log2||sO,ln:Math.log,lg:Math.log10||ET,log10:Math.log10||ET,expm1:Math.expm1||iO,log1p:Math.log1p||tO,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||FT,"-":TT,"+":Number,exp:Math.exp,not:OT,length:RT,"!":DT,sign:Math.sign||cO},this.binaryOps={"+":hT,"-":mT,"*":uT,"/":pT,"%":dT,"^":Math.pow,"||":zT,"==":vT,"!=":HT,">":VT,"<":MT,">=":CT,"<=":gT,and:bT,or:LT,in:xT,"=":UT,"[":ZT},this.ternaryOps={"?":$T},this.functions={random:_T,fac:DT,min:XT,max:QT,hypot:Math.hypot||BT,pyt:Math.hypot||BT,pow:Math.pow,atan2:Math.atan2,if:$T,gamma:PT,roundTo:qT,map:WT,fold:GT,filter:YT,indexOf:KT,join:JT},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}nO.prototype.parse=function(c){var e=[],a=new rT(this,new sT(this,c),{allowMemberAccess:this.options.allowMemberAccess});return a.parseExpression(e),a.expect(WE,"EOF"),new XE(e,this)},nO.prototype.evaluate=function(c,e){return this.parse(c).evaluate(e)};var rO=new nO;nO.parse=function(c){return rO.parse(c)},nO.evaluate=function(c,e){return rO.parse(c).evaluate(e)};var oO={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};nO.prototype.isOperatorEnabled=function(c){var e=function(c){return oO.hasOwnProperty(c)?oO[c]:c}(c),a=this.options.operators||{};return!(e in a)||!!a[e]};class lO{chars;nextId;constructor(c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"){this.chars=c,this.nextId=[0]}next(){const c=[];for(const e of this.nextId)c.unshift(this.chars[e]);return this.increment(),c.join("")}increment(){for(let c=0;c<this.nextId.length;c++){if(!(++this.nextId[c]>=this.chars.length))return;this.nextId[c]=0}this.nextId.push(0)}*[Symbol.iterator](){for(;;)yield this.next()}}function fO(c,e,a){return c.map((c=>{if("mentions"===c.type){const i=c.character;if(!i)return"";let t;return Object.keys(e).forEach((c=>{e[c]===i&&(t=c)})),t||(t=a.next(),e[t]=i),t}return c.children?.length?fO(c.children,e,a):eN.c2.string(c)})).join("")}function hO(c,e){const a=(0,eN.bp)(e),i=(0,eN.bf)(eN.bu),t=(0,eN.be)().elements;return(0,HM.useMemo)((()=>{let e="";const s={},n=new lO;a&&(e=fO(a,s,n)),e=e.replace(/[^A-Za-z 0-9 .,?""!@#$%^&*()\-_=+;:<>/\\|}{[\]`~]*/g,"");const r=t[c]?(0,eN.c3)(t[c].appearance?.title??c):c;try{const a=(new nO).parse(e),n={};return Object.keys(s).forEach((e=>{n[e]=0;const a=s[e];if(!a)return void eN.bW.e(`${r} :: Invalid element Id "${a}" in formula.`);if(a===c)return void eN.bW.e(`${r} :: Math element cannot reference itself in the formula.`);const o=t[a],l=i[a];if(!o||!l)return void eN.bW.e(`${r} :: Insufficient data for element Id "${a}" in formula.`);const f=(0,eN.c3)(o.appearance?.title??a),h=eN.c4.hasItem(o.type)?eN.c4.getItem(o.type):null;h?h.getNumericValue?n[e]=h.getNumericValue(o,l.value):eN.bW.e(`${r} :: Element does not have numeric value for "${f}" in formula.`):eN.bW.e(`${r} :: Element not supported for "${f}" in formula.`)})),a.evaluate(n)}catch(c){return eN.bW.e(`${r} :: ${c?.message}`),0}}),[t,i,c,a])}const mO={id:"mathcalc",hasSubmission:!0,neededPlan:"starter",FormUi({elementData:c,updateSubmissionData:e,submissionData:a,presentation:t}){const s=hO(c.id,c.config.mathcalc?.interface?.formula??"");(0,HM.useEffect)((()=>{const c=Number.isFinite(s)?s:0;a.value.mathcalc?.output!==c&&e((0,eN.bX)(a,(e=>{e.value.mathcalc.output=c})))}),[s,e,a]);const n=(0,eN.bp)(c.appearance?.title),r=(0,eN.bp)(c.config.mathcalc?.interface?.prefix),o=(0,eN.bp)(c.config.mathcalc?.interface?.suffix);return(0,i.jsx)(tS,{value:a.value.mathcalc.output,appearance:c.config.mathcalc?.interface?.type,label:n&&"regular"===t?(0,i.jsx)(eN.br,{nodes:n,currentElementId:c.id},void 0):null,className:c.appearance?.className,decimalSeparator:c.config.mathcalc?.interface?.decimalSeparator,precision:c.config.mathcalc?.interface?.precision,prefix:r?(0,i.jsx)(eN.br,{nodes:r,currentElementId:c.id},void 0):void 0,suffix:o?(0,i.jsx)(eN.br,{nodes:o,currentElementId:c.id},void 0):void 0,thousandsSeparator:c.config.mathcalc?.interface?.thousandsSeparator},void 0)},getErrors:(c,e)=>[],isQuestion:!1,isRequired:c=>!1,setValue(c,e,a){const i=(0,eN.b_)(c);a.mathcalc.output=i},isConditionTrue(c,e,a,i,t){let s=!1;const n=(0,eN.b_)(i,Number.NaN);if(Number.isNaN(n))return eN.bW.l(`%c ERROR %c conditional operation on mathcalc assumes numeric value. ${i} given.`,eN.bW.style.error,eN.bW.style.reset),!1;const r=t.mathcalc.output;return a===eN.E.EQUALS_TO?s=r===n:a===eN.E.GREATER_THAN?s=r>n:a===eN.E.LESS_THAN&&(s=r<n),e===eN.c.IS?s:!s},getDisplayValue(c,e){const a=e.mathcalc.output;return(0,eN.aZ)(a,c.config.mathcalc?.interface?.precision??2)},getNumericValue(c,e){const a=e.mathcalc.output;return(0,eN.b_)(a)},getAnswerValue(c,e){const a=e.mathcalc.output,t=(0,eN.bs)(c.config.mathcalc?.interface?.prefix),s=(0,eN.bs)(c.config.mathcalc?.interface?.suffix),n=(0,eN.aZ)(a,c.config.mathcalc?.interface?.precision??2);return(0,i.jsxs)(eN.ax.Generic,{children:[(0,i.jsx)(eN.br,{nodes:t,currentElementId:c.id},void 0),n,(0,i.jsx)(eN.br,{nodes:s,currentElementId:c.id},void 0)]},void 0)},getPresetValue:(c,e)=>(0,eN.bX)(e,(c=>{c.mathcalc.output=0}))},uO={id:"mathcalcgroup",hasSubmission:!1,FormUi:({elementData:c})=>c.children.length<1?(0,i.jsx)(eN.ad,Object.assign({icon:(0,i.jsx)(eN.a3,{iconClass:"fas fa-envelope-open"},void 0)},{children:(0,eN._)("This math group is empty.","wp-eform")}),void 0):(0,i.jsx)(tS.Group,{children:c.children.map((c=>(0,i.jsx)(eN.c5,{elmId:c,hasGutter:!1},c)))},void 0),neededPlan:"starter",getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){}};function pO(c,e){const a=e.config.rating?.interface?.showFeedback;if(!a)return!1;const i=e.config.rating.interface.compareWith;let t=!1;switch(e.config.rating.interface.feedbackWhen){case eN.N.EQUALS_TO:t=c===i;break;case eN.N.GREATER_THAN:t=c>i;break;case eN.N.LESS_THAN:t=c<i;break;default:t=!1}return t}function dO(c){let e=5;return["star","circle","customRating"].includes(c.config.rating.interface.type)?e=c.config.rating.interface.ratingMax:"custom"===c.config.rating.interface.type&&(e=c.config.rating.interface.customItems.length),e}function zO(c){const{id:e,elementData:a,submissionData:t,updateSubmissionData:s}=c,n=t.value.rating?.feedback??"",r=pO(t.value.rating.selected,a),o=(0,eN.bp)(a.config.rating?.interface?.feedbackLabel);return(0,i.jsx)(eN.az,Object.assign({visible:r},{children:(0,i.jsx)(eN.a4,{id:`feedback-${e}`,value:n,onChange:c=>{s((0,eN.bX)(t,(e=>{e.value.rating.feedback=c})))},prefix:(0,i.jsx)(eN.a3,{iconClass:"fas fa-pen-nib"},void 0),hasError:r&&a.config.rating?.validation?.required&&""===n,placeholder:o?(0,i.jsx)(eN.br,{nodes:o,currentElementId:a.id},void 0):(0,eN._)("enter your feedback here","wp-eform")},void 0)}),void 0)}const vO=[{id:"angry",icon:"fas fa-angry"},{id:"frown",icon:"fas fa-frown"},{id:"meh",icon:"fas fa-meh"},{id:"smile",icon:"fas fa-smile"},{id:"grin-hearts",icon:"fas fa-grin-hearts"}],HO={id:"rating",hasSubmission:!0,neededPlan:"starter",FormUi({elementData:c,setElementTouched:e,submissionData:a,updateSubmissionData:t,hasError:s,controlAlignment:n,id:r}){const o=c.config.rating.interface.type,l=c.config.rating.interface.ratingMax,f=c.config.rating.interface.customItems,h=c.config.rating.interface.customRatingIcon,m=(0,HM.useMemo)((()=>{let c,e="fas fa-star";switch(o){default:case"star":case"circle":case"customRating":"circle"===o?e="fas fa-dot-circle":"customRating"===o&&(e=h),c=Array.from({length:l}).map(((c,a)=>({id:`index-${a}`,icon:e})));break;case"emoji":c=vO;break;case"custom":c=f.map((c=>({icon:c.icon,id:c.itemId})))}return c}),[f,h,l,o]),u=a.value.rating.selected,p=c.config.rating?.interface?.showFeedback;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(fA,{items:m,onChange:c=>{t((0,eN.bX)(a,(e=>{e.value.rating.selected=c+1}))),e(!0)},value:u-1,controlAlignment:n,disabled:c.config.rating?.attributes.readonly,className:c.appearance?.className,hasError:s,id:r,name:r},void 0),p?(0,i.jsx)(zO,{elementData:c,id:r,submissionData:a,updateSubmissionData:t},void 0):null]},void 0)},getErrors(c,e){const a=[],i=e.rating.selected,t=dO(c),s=!!c.config.rating?.validation?.required;s&&i<1&&a.push(eN.bY.requiredRating),i>t&&a.push(eN.bY.ratingInvariant);const n=pO(i,c);return s&&n&&!e.rating?.feedback&&a.push(eN.bY.requiredRatingFeedback),a},isQuestion:!0,isRequired:c=>!!c.config.rating?.validation?.required,setValue(c,e,a){const i=(0,eN.b_)(c);a.rating.selected=i},isConditionTrue(c,e,a,i,t){let s=!1;const n=(0,eN.b_)(i,Number.NaN);if(Number.isNaN(n))return eN.bW.e(`conditional operation on rating assumes numeric value. ${i} given.`),!1;const r=t.rating.selected;return a===eN.E.EQUALS_TO?s=r===n:a===eN.E.GREATER_THAN?s=r>n:a===eN.E.LESS_THAN&&(s=r<n),e===eN.c.IS?s:!s},getDisplayValue(c,e){const a=e.rating.selected;return(0,eN.aZ)(a,0)},getAnswerValue(c,e){const a=e.rating.selected,t=pO(a,c);return(0,i.jsxs)(eN.ax.Generic,{children:[(0,i.jsxs)("p",{children:[(0,eN.aZ)(a,0),(0,eN.a5)(" / ","rating-separator","wp-eform"),(0,eN.aZ)(dO(c),0)]},void 0),t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eN.ax.Separator,{},void 0),(0,i.jsx)(eN.ax.UserInput,{children:e.rating.feedback},void 0)]},void 0):null]},void 0)},getNumericValue:(c,e)=>e.rating.selected??0,getPresetValue:(c,e)=>(0,eN.bX)(e,(e=>{if((0,eN.b$)(c.config.rating?.attributes.defaultValue)||(e.rating.selected=(0,eN.b_)(c.config.rating?.attributes.defaultValue)),c.config.rating?.attributes.prefilType===eN.n.URL&&(e.rating.selected=(0,eN.b_)((0,eN.c0)(window.location.search,c.config.rating.attributes.prefilParameter))),c.config.rating?.attributes.prefilType===eN.n.META){const a=(0,eN.c1)(c.extras);if(a&&a.metaValue){const c=a.metaValue;"number"==typeof c&&(e.rating.selected=c)}}e.rating.selected<0&&(e.rating.selected=0)}))},VO={id:"ratinggroup",hasSubmission:!1,FormUi:({elementData:c})=>c.children.length<1?(0,i.jsx)(eN.ad,Object.assign({icon:(0,i.jsx)(eN.a3,{iconClass:"fas fa-envelope-open"},void 0)},{children:(0,eN._)("This group is empty.","wp-eform")}),void 0):(0,i.jsx)($w,Object.assign({alignment:c.appearance?.controlAlignment,layout:c.appearance?.controlLayout},{children:c.children.map((c=>(0,i.jsx)(eN.c5,{elmId:c,hasGutter:!1,overrideRender:(c,e,a,t)=>(0,i.jsxs)($w.Item,Object.assign({},t,{children:[(0,i.jsxs)($w.Heading,{children:[c,a?(0,i.jsx)(eN.aD.Asterisk,{},void 0):null]},void 0),(0,i.jsx)($w.Control,{children:e},void 0)]}),void 0)},c)))}),void 0),neededPlan:"starter",getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){},noGutter:!0},MO={id:"rangegroup",hasSubmission:!1,FormUi:({elementData:c})=>c.children.length<1?(0,i.jsx)(eN.ad,Object.assign({icon:(0,i.jsx)(eN.a3,{iconClass:"fas fa-envelope-open"},void 0)},{children:(0,eN._)("This group is empty.","wp-eform")}),void 0):(0,i.jsx)($w,Object.assign({alignment:c.appearance?.controlAlignment,layout:c.appearance?.controlLayout},{children:c.children.map((c=>(0,i.jsx)(eN.c5,{elmId:c,hasGutter:!1,overrideRender:(c,e,a,t)=>(0,i.jsxs)($w.Item,Object.assign({},t,{children:[(0,i.jsxs)($w.Heading,{children:[c,a?(0,i.jsx)(eN.aD.Asterisk,{},void 0):null]},void 0),(0,i.jsx)($w.Control,{children:e},void 0)]}),void 0)},c)))}),void 0),neededPlan:"starter",getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){},noGutter:!0},CO={id:"slidergroup",hasSubmission:!1,FormUi:({elementData:c})=>c.children.length<1?(0,i.jsx)(eN.ad,Object.assign({icon:(0,i.jsx)(eN.a3,{iconClass:"fas fa-envelope-open"},void 0)},{children:(0,eN._)("This slider group is empty.","wp-eform")}),void 0):(0,i.jsx)($w,Object.assign({alignment:c.appearance?.controlAlignment,layout:c.appearance?.controlLayout},{children:c.children.map((c=>(0,i.jsx)(eN.c5,{elmId:c,hasGutter:!1,overrideRender:(c,e,a,t)=>(0,i.jsxs)($w.Item,Object.assign({},t,{children:[(0,i.jsxs)($w.Heading,{children:[c,a?(0,i.jsx)(eN.aD.Asterisk,{},void 0):null]},void 0),(0,i.jsx)($w.Control,{children:e},void 0)]}),void 0)},c)))}),void 0),getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){},noGutter:!0},gO={id:"stackedgroup",hasSubmission:!1,FormUi:({elementData:c})=>c.children.length<1?(0,i.jsx)(eN.ad,Object.assign({icon:(0,i.jsx)(eN.a3,{iconClass:"fas fa-envelope-open"},void 0)},{children:(0,eN._)("This group is empty.","wp-eform")}),void 0):(0,i.jsx)($w,Object.assign({alignment:c.appearance?.controlAlignment,layout:c.appearance?.controlLayout},{children:c.children.map((c=>(0,i.jsx)(eN.c5,{elmId:c,hasGutter:!1,overrideRender:(c,e,a,t)=>(0,i.jsxs)($w.Item,Object.assign({},t,{children:[(0,i.jsxs)($w.Heading,{children:[c,a?(0,i.jsx)(eN.aD.Asterisk,{},void 0):null]},void 0),(0,i.jsx)($w.Control,{children:e},void 0)]}),void 0),presentation:"stacked"},c)))}),void 0),neededPlan:"starter",getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){},noGutter:!0};var bO,LO;function xO(){return xO=Object.assign||function(c){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},xO.apply(this,arguments)}function yO(c){return HM.createElement("svg",xO({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},c),bO||(bO=HM.createElement("g",{fillRule:"evenodd"},HM.createElement("path",{d:"M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6z"}),HM.createElement("path",{d:"M25.714 47.143c.476 0 .905-.19 1.286-.572l24.571-24.428c.381-.286.572-.667.572-1.143s-.19-.905-.572-1.286l-3.142-3.143c-.381-.38-.81-.571-1.286-.571s-.857.19-1.143.571l-20.286 20-8.428-8.714A2.09 2.09 0 0016 27.43c-.476 0-.857.142-1.143.428l-3.286 3.286A1.358 1.358 0 0011 32.286c0 .476.19.904.571 1.285l13 13c.286.381.667.572 1.143.572z"}))))}function NO(){return NO=Object.assign||function(c){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},NO.apply(this,arguments)}function wO(c){return HM.createElement("svg",NO({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},c),LO||(LO=HM.createElement("path",{fillRule:"evenodd",d:"M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 6C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6z"})))}function SO(c,e){const a=[],i=e.interface?.columns.map((c=>c.itemId))??[];let t;try{t=JSON.parse("string"==typeof c?c:""),(0,eN.c6)(t,"matrixchoicevalue")&&Array.isArray(t.data)&&e.interface?.rows.forEach((c=>{const s=t.data.find((e=>e.rowId===c.itemId));let n=s?.columns.filter((c=>i.includes(c)))??[];!1===e.interface?.multiple&&(n=n.length?[n[0]]:n),a.push({rowId:c.itemId,columns:n})}))}catch(c){}return a}const kO={id:"matrixchoice",hasSubmission:!0,FormUi({elementData:c,id:e,setElementTouched:a,submissionData:t,updateSubmissionData:s}){const n=(0,HM.useMemo)((()=>c.config.matrixchoice?.interface?.columns.map((e=>({id:e.itemId,title:(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0),width:e.width})))??[]),[c.id,c.config.matrixchoice?.interface?.columns]),r=(0,HM.useMemo)((()=>c.config.matrixchoice?.interface?.rows.map((e=>({id:e.itemId,title:(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0)})))??[]),[c.id,c.config.matrixchoice?.interface?.rows]);return(0,eN.bx)("starter")?(0,i.jsx)(Kk,{value:t.value.matrixchoice?.selected??[],columns:n,rows:r,className:c.appearance?.className,disabled:c.config.matrixchoice?.attributes.readonly,fixedLayout:!1,onChange:(c,e)=>{const a=(0,eN.bX)(t,(a=>{const i=a.value.matrixchoice.selected.find((e=>e.rowId===c));i?i.columns=e:a.value.matrixchoice.selected.push({rowId:c,columns:e})}));s(a)},icon:c.config.matrixchoice?.interface?.icon,highlightOnHover:!0,multiple:c.config.matrixchoice?.interface?.multiple,namePrefix:e,onBlur:()=>{a(!0)},rowHeadingWidth:c.config.matrixchoice?.interface?.rowHeadingWidth,tableType:"stripped"===c.config.matrixchoice?.interface?.tableType?"stripped":"regular"},void 0):(0,i.jsx)("p",{children:"Not implemented in current plan"},void 0)},getErrors(c,e){const a=!!c.config.matrixchoice?.validation?.required,i=c.config.matrixchoice?.interface?.columns.map((c=>c.itemId))??[],t=e.matrixchoice?.selected??[],s=[];if(!a)return s;const n=c.config.matrixchoice?.interface?.rows.every((c=>{const e=t.find((e=>e.rowId===c.itemId));return!!e&&e.columns.some((c=>i.includes(c)))}));return n||s.push(eN.bY.requiredMatrixChoice),s},isQuestion:!0,isRequired:c=>!!c.config.matrixchoice?.validation?.required,setValue(c,e,a){const i=SO(c,e.config.matrixchoice);a.matrixchoice.selected=i},isConditionTrue(c,e,a,i,t,s){let n=!1;if(c===eN.b.LENGTH){const c=t.matrixchoice?.selected.reduce(((c,e)=>c+e.columns.length),0)??0;n=(0,eN.c7)(i,c,a)}else{const c=SO(i,s.config.matrixchoice);n=0===t.matrixchoice?.selected.length?0===c.length:c.every((c=>{const e=t.matrixchoice?.selected.find((e=>e.rowId===c.rowId));if(!e)return 0===c.columns.length;const i=e.columns,s=c.columns,n=s.every((c=>i.includes(c)));return a===eN.E.EQUALS_TO?i.length===s.length&&n:i.length>=s.length&&n}))}return(0,eN.c8)(e,n)},getDisplayValue(c,e){const a=e.matrixchoice?.selected,t={},s={};return c.config.matrixchoice?.interface?.rows.forEach((c=>{t[c.itemId]=(0,i.jsx)(eN.c9,{nodes:(0,eN.bs)(c.label),mode:"singleline"},void 0)})),c.config.matrixchoice?.interface?.columns.forEach((c=>{s[c.itemId]=(0,i.jsx)(eN.c9,{nodes:(0,eN.bs)(c.label),mode:"singleline"},void 0)})),(0,i.jsx)(i.Fragment,{children:a?.map(((c,e)=>(0,i.jsxs)(HM.Fragment,{children:[(0,i.jsxs)("strong",{children:[t[c.rowId]??(0,eN._)("Unknown Row","wp-eform"),(0,eN.a5)(": ","matrixchoice-dislay-heading-separator","wp-eform")]},void 0),c.columns.map(((e,a)=>(0,i.jsxs)(HM.Fragment,{children:[s[e]??(0,eN._)("Unknown column","wp-eform"),a!==c.columns.length-1?(0,eN.a5)(", ","matrixchoice-column-separator","wp-eform"):""]},e))),e!==a.length-1?(0,eN.a5)(" | ","matrixchoice-row-separator","wp-eform"):""]},c.rowId)))},void 0)},getNumericValue(c,e){const a={};return c.config.matrixchoice?.interface?.columns.forEach((c=>{a[c.itemId]=c.num??0})),e.matrixchoice?.selected.reduce(((c,e)=>e.columns.reduce(((c,e)=>c+(a[e]??0)),0)??0),0)??0},getAnswerValue(c,e){const a=e.matrixchoice?.selected??[],t=(0,i.jsx)(eN.a3,{children:c.config.matrixchoice?.interface?.multiple?(0,i.jsx)(eN.ca,{},void 0):(0,i.jsx)(yO,{},void 0)},void 0),s=(0,i.jsx)(eN.a3,{children:c.config.matrixchoice?.interface?.multiple?(0,i.jsx)(eN.cb,{},void 0):(0,i.jsx)(wO,{},void 0)},void 0);return(0,i.jsx)(eN.ax.Generic,{children:c.config.matrixchoice?.interface?.rows.map((e=>{const n=a.find((c=>c.rowId===e.itemId));return(0,i.jsxs)(HM.Fragment,{children:[(0,i.jsx)("h4",{children:(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),currentElementId:c.id,mode:"singleline"},void 0)},void 0),(0,i.jsx)("ul",{children:c.config.matrixchoice?.interface?.columns.map((e=>(0,i.jsxs)("li",{children:[n?.columns.includes(e.itemId)?t:s," ",(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),currentElementId:c.id,mode:"singleline"},void 0)]},e.itemId)))},void 0)]},e.itemId)}))},void 0)},getPresetValue(c,e){const a=[];return c.config.matrixchoice?.interface?.rows.forEach((c=>{a.push({rowId:c.itemId,columns:[]})})),(0,eN.bX)(e,(e=>{e.matrixchoice.selected=a,(0,eN.b$)(c.config.matrixchoice?.attributes.defaultValue)||(e.matrixchoice.selected=SO(c.config.matrixchoice?.attributes.defaultValue,c.config.matrixchoice))}))}};function AO(c,e){let a,i=e.interface?.items.map((c=>c.itemId))??[];try{a=JSON.parse("string"==typeof c?c:""),(0,eN.c6)(a,"sortablevalue")&&Array.isArray(a.data)&&i.length===a.data.length&&i.every((c=>a.data.includes(c)))&&(i=a.data)}catch(c){}return i}const EO={id:"sortable",hasSubmission:!0,FormUi({elementData:c,setElementTouched:e,submissionData:a,updateSubmissionData:t}){const s=(0,HM.useMemo)((()=>c.config.sortable?.interface?.items.map((e=>({id:e.itemId,label:(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0)})))??[]),[c]);return(0,eN.bx)("starter")?(0,i.jsx)(bA,{items:s,currentOrder:a.value.sortable.order,updateOrder:c=>{t((0,eN.bX)(a,(e=>{e.value.sortable.order=c}))),e(!0)},className:c.appearance?.className,lockVertically:c.config.sortable?.interface?.lockVertically},void 0):(0,i.jsx)("p",{children:"Not implemented in current plan"},void 0)},getErrors:(c,e)=>[],isQuestion:!0,isRequired:c=>!1,setValue(c,e,a){const i=AO(c,e.config.sortable);a.sortable.order=i},isConditionTrue(c,e,a,i,t,s){let n=!1;return n=AO(i,s.config.sortable).every(((c,e)=>t.sortable?.order[e]&&t.sortable.order[e]===c)),(0,eN.c8)(e,n)},getDisplayValue(c,e){const a={};c.config.sortable?.interface?.items.forEach((c=>{a[c.itemId]=(0,i.jsx)(eN.c9,{nodes:(0,eN.bs)(c.label),mode:"singleline"},void 0)}));const t=e.sortable?.order??[];return(0,i.jsx)(i.Fragment,{children:t.map(((c,e)=>(0,i.jsxs)(HM.Fragment,{children:[a[c]??c,e!==t.length-1?(0,eN.a5)(", ","sortable-item-separator","wp-eform"):""]},c)))},void 0)},getAnswerValue(c,e){const a={};c.config.sortable?.interface?.items.forEach((e=>{a[e.itemId]=(0,i.jsx)(eN.br,{currentElementId:c.id,nodes:(0,eN.bs)(e.label),mode:"singleline"},void 0)}));const t=e.sortable?.order??[];return(0,i.jsx)(eN.ax.Generic,{children:(0,i.jsx)("ol",{children:t.map((c=>(0,i.jsx)("li",{children:a[c]??c},c)))},void 0)},void 0)},getPresetValue(c,e){const a=c.config.sortable?.interface?.items.map((c=>c.itemId))??[];return(0,eN.bX)(e,(e=>{if(c.config.sortable?.interface?.shuffle){const c=[...a];(0,eN.aR)(c),e.sortable.order=c}else e.sortable.order=a;if(!(0,eN.b$)(c.config.sortable?.attributes.defaultValue)){const i=AO(c.config.sortable?.attributes.defaultValue,c.config.sortable);(0,eN.cc)(i,a)||(e.sortable.order=i)}}))}},TO=new eN.cd("DateTime Configs",(c=>({...c,getFormattedValue(e,a,i){let t;const s="12hrs"===i?"hh:mm:ss A":"HH:mm:ss";return t="time"===a?s:"datetime"===a?`${c.format} ${s}`:c.format,e.format(t)}})));TO.addItem("mm/dd/yyyy",{format:"MM/DD/YYYY",dateType:"MMDDYYYY",dateSeparator:"/",timeSeparator:":"}),TO.addItem("mm-dd-yyyy",{format:"MM-DD-YYYY",dateType:"MMDDYYYY",dateSeparator:"-",timeSeparator:":"}),TO.addItem("dd/mm/yyyy",{format:"DD/MM/YYYY",dateType:"DDMMYYYY",dateSeparator:"/",timeSeparator:":"}),TO.addItem("dd-mm-yyyy",{format:"DD-MM-YYYY",dateType:"DDMMYYYY",dateSeparator:"-",timeSeparator:":"}),TO.addItem("yyyy-mm-dd",{format:"YYYY-MM-DD",dateType:"YYYYMMDD",dateSeparator:"-",timeSeparator:":"}),TO.addItem("yyyy/mm/dd",{format:"YYYY/MM/DD",dateType:"YYYYMMDD",dateSeparator:"/",timeSeparator:":"});const OO={datetimeInput:(0,eN._)("No user input.","wp-eform"),matrixInput:(0,eN._)("…","wp-eform")},FO=(0,eN.b0)().set("second",0).unix(),_O={id:"datetimeinput",hasSubmission:!0,FormUi({elementData:c,controlAlignment:e,hasError:a,controlType:t,id:s,setElementTouched:n,submissionData:r,updateSubmissionData:o}){const l=(0,HM.useMemo)((()=>{let e=c.config.datetimeinput?.interface?.format??"";return TO.hasItem(e)||(e="mm/dd/yyyy"),TO.getItem(e)}),[c]),f=(0,HM.useMemo)((()=>"time"===c.config.datetimeinput?.interface?.type?"time":"datetime"===c.config.datetimeinput?.interface?.type?"datetime":"date"),[c]);return(0,eN.bx)("starter")?(0,i.jsx)(Wk,{dateTimeFormat:"YYYY-MM-DD HH:mm:ss",onChange:c=>{o((0,eN.bX)(r,(e=>{e.value.datetimeinput.input=c})))},pickerType:f,value:r.value.datetimeinput.input,className:c.appearance?.className,controlAlignment:e,controlType:t,dateSeparator:l.dateSeparator,dateTimeSeparator:c.config.datetimeinput?.interface?.dateTimeSeparator,dateType:l.dateType,readOnly:c.config.datetimeinput?.attributes.readonly,hasError:a,id:s,onBlur:()=>{n(!0)},prefix:c.config.datetimeinput?.interface?.icon?(0,i.jsx)(eN.a3,{iconClass:c.config.datetimeinput.interface.icon},void 0):void 0,showInputLabels:c.config.datetimeinput?.interface?.showInputLabels,timeSeparator:l.timeSeparator,timeType:"12hrs"===c.config.datetimeinput?.interface?.timeType?"12hrs":"24hrs",maxValue:(0,eN.ce)(c.config.datetimeinput?.validation?.maxValue,FO),minValue:(0,eN.ce)(c.config.datetimeinput?.validation?.minValue,FO),hideSeconds:c.config.datetimeinput?.interface?.hideSeconds},void 0):(0,i.jsx)("p",{children:"Not implemented in current plan"},void 0)},getErrors(c,e){const a=[],i=!!c.config.datetimeinput?.validation?.required,t=(0,eN.cf)(e.datetimeinput?.input??"");i&&!t&&a.push(eN.bY.requiredDateTimeInput),t&&((0,eN.b0)(t,eN.cg).isValid()||a.push(eN.bY.dateTimeInputInvalid));let s=c.config.datetimeinput?.interface?.format??"";TO.hasItem(s)||(s="mm/dd/yyyy");const n=TO.getItem(s),r=(0,eN.ce)(c.config.datetimeinput?.validation?.minValue,FO);r&&t&&-1===(0,eN.ch)(t,r)&&a.push((0,eN.ab)(eN.bY.dateTimeInputMustBeLess,n.getFormattedValue((0,eN.ci)(r),c.config.datetimeinput?.interface?.type,c.config.datetimeinput?.interface?.timeType)));const o=(0,eN.ce)(c.config.datetimeinput?.validation?.maxValue,FO);return o&&t&&1===(0,eN.ch)(t,o)&&a.push((0,eN.ab)(eN.bY.dateTimeInputMustBeGreater,n.getFormattedValue((0,eN.ci)(o),c.config.datetimeinput?.interface?.type,c.config.datetimeinput?.interface?.timeType))),a},isQuestion:!0,isRequired:c=>!!c.config.datetimeinput?.validation?.required,setValue(c,e,a){if(c){const e=(0,eN.ce)(c,FO);e&&(a.datetimeinput.input=e)}},isConditionTrue(c,e,a,i,t,s){let n=!1;const r=(0,eN.ce)(i,FO),o=(0,eN.cf)(t.datetimeinput?.input??"");if(r&&o){const c=(0,eN.ch)(o,r);switch(a){default:case eN.E.EQUALS_TO:n=0===c;break;case eN.E.LESS_THAN:n=-1===c;break;case eN.E.GREATER_THAN:n=1===c}}return(0,eN.c8)(e,n)},getDisplayValue(c,e){let a=c.config.datetimeinput?.interface?.format??"";TO.hasItem(a)||(a="mm/dd/yyyy");const i=TO.getItem(a),t=(0,eN.cf)(e.datetimeinput?.input??"");if(!t)return;const s=(0,eN.b0)(t,eN.cg);return s.isValid()?i.getFormattedValue(s,c.config.datetimeinput?.interface?.type,c.config.datetimeinput?.interface?.timeType):void 0},getNumericValue(c,e){const a=(0,eN.cf)(e.datetimeinput?.input??"");if(!a)return FO;const i=(0,eN.b0)(a,eN.cg);return i.isValid()?i.unix():FO},getAnswerValue(c,e){let a=c.config.datetimeinput?.interface?.format??"";TO.hasItem(a)||(a="mm/dd/yyyy");const i=TO.getItem(a),t=(0,eN.cf)(e.datetimeinput?.input??"");if(!t)return OO.datetimeInput;const s=(0,eN.b0)(t,eN.cg);return s.isValid()?i.getFormattedValue(s,c.config.datetimeinput?.interface?.type,c.config.datetimeinput?.interface?.timeType):OO.datetimeInput},neededPlan:"starter",getPresetValue:(c,e)=>(0,eN.bX)(e,(e=>{let a="";if((0,eN.b$)(c.config.datetimeinput?.attributes.defaultValue)||(a=c.config.datetimeinput.attributes.defaultValue),c.config.datetimeinput?.attributes.prefilType===eN.n.URL){const e=(0,eN.c0)(window.location.search,c.config.datetimeinput.attributes.prefilParameter);e&&"string"==typeof e&&(a=e)}if(c.config.datetimeinput?.attributes.prefilType===eN.n.META){const e=(0,eN.c1)(c.extras);e&&e.metaValue&&"string"==typeof e.metaValue&&(a=e.metaValue)}const i=(0,eN.ce)(a);i&&(e.datetimeinput.input=i)}))};function DO(c,e){const a=[];let i;try{i=JSON.parse("string"==typeof c?c:""),(0,eN.c6)(i,"matrixinputvalue")&&Array.isArray(i.data)&&e.interface?.rows.forEach((c=>{e.interface?.columns.forEach((e=>{const t=i.data.find((a=>a.columnId===e.itemId&&a.rowId===c.itemId));t?a.push(t):a.push({rowId:c.itemId,columnId:e.itemId,value:""})}))}))}catch(c){}return a}const jO={id:"matrixinput",hasSubmission:!0,FormUi({elementData:c,id:e,setElementTouched:a,submissionData:t,updateSubmissionData:s}){const n=(0,HM.useMemo)((()=>c.config.matrixinput?.interface?.columns.map((e=>({id:e.itemId,title:(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0),width:e.width})))??[]),[c.id,c.config.matrixinput?.interface?.columns]),r=(0,HM.useMemo)((()=>c.config.matrixinput?.interface?.rows.map((e=>({id:e.itemId,title:(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0)})))??[]),[c.id,c.config.matrixinput?.interface?.rows]);return(0,eN.bx)("starter")?(0,i.jsx)(cA,{value:t.value.matrixinput?.input??[],columns:n,rows:r,className:c.appearance?.className,disabled:c.config.matrixinput?.attributes.readonly,fixedLayout:!0,onChange:(c,e,a)=>{const i=(0,eN.bX)(t,(i=>{const t=i.value.matrixinput.input.find((a=>a.rowId===c&&a.columnId===e));t?t.value=a:i.value.matrixinput.input.push({rowId:c,columnId:e,value:a})}));s(i)},icon:c.config.matrixinput?.interface?.icon,highlightOnHover:!0,multiline:c.config.matrixinput?.interface?.multiline,namePrefix:e,onBlur:()=>{a(!0)},rowHeadingWidth:c.config.matrixinput?.interface?.rowHeadingWidth,tableType:"stripped"===c.config.matrixinput?.interface?.tableType?"stripped":"regular"},void 0):(0,i.jsx)("p",{children:"Not implemented in curren tplan."},void 0)},getErrors(c,e){const a=[];if(!c.config.matrixinput?.validation?.required)return a;const i=c.config.matrixinput?.interface?.rows.every((a=>c.config.matrixinput?.interface?.columns.every((c=>{const i=e.matrixinput?.input.find((e=>e.columnId===c.itemId&&e.rowId===a.itemId));return!(!i||""===i.value)}))));return i||a.push(eN.bY.requiredMatrixInput),a},isQuestion:!0,isRequired:c=>!!c.config.matrixinput?.validation?.required,setValue(c,e,a){const i=DO(c,e.config.matrixinput);a.matrixinput.input=i},isConditionTrue(c,e,a,i,t,s){let n=!1;if(c===eN.b.LENGTH){const c=t.matrixinput?.input.reduce(((c,e)=>""!==e.value?c+1:c),0)??0;n=(0,eN.c7)(i,c,a)}else{const c=DO(i,s.config.matrixinput);n=0===t.matrixinput?.input.length?0===c.length:c.every((c=>{const e=t.matrixinput?.input.find((e=>e.rowId===c.rowId&&e.columnId===c.columnId));return!!e&&(a===eN.E.EQUALS_TO?c.value.toLowerCase()===e.value.toLowerCase():e.value.toLowerCase().includes(c.value.toLowerCase()))}))}return(0,eN.c8)(e,n)},getDisplayValue(c,e){const a={},t={};c.config.matrixinput?.interface?.rows.forEach((c=>{a[c.itemId]=(0,i.jsx)(eN.c9,{nodes:(0,eN.bs)(c.label),mode:"singleline"},void 0)})),c.config.matrixinput?.interface?.columns.forEach((c=>{t[c.itemId]=(0,i.jsx)(eN.c9,{nodes:(0,eN.bs)(c.label),mode:"singleline"},void 0)}));const s=c.config.matrixinput?.interface?.rows.length??0,n=c.config.matrixinput?.interface?.columns.length??0;return(0,i.jsx)(i.Fragment,{children:c.config.matrixinput?.interface?.rows.map(((r,o)=>(0,i.jsx)(HM.Fragment,{children:c.config.matrixinput?.interface?.columns.map(((c,l)=>{const f=e.matrixinput?.input.find((e=>e.rowId===r.itemId&&e.columnId===c.itemId));return(0,i.jsxs)(HM.Fragment,{children:[(0,i.jsxs)("strong",{children:[a[r.itemId]??(0,eN._)("Unknown Row","wp-eform"),(0,eN.a5)(" / ","matrixinput-dislay-row-col-separator","wp-eform"),t[c.itemId]??(0,eN._)("Unknown column","wp-eform"),(0,eN.a5)(": ","matrixinput-dislay-heading-separator","wp-eform")]},void 0),(0,i.jsx)("span",{children:f?.value.length?f.value:(0,eN.a5)("…","matrixinput-display-empty-value","wp-eform")},void 0),o===s-1&&l===n-1?"":(0,eN.a5)(", ","matrixinput-row-col-value-separator","wp-eform")]},c.itemId)}))},r.itemId)))},void 0)},getNumericValue:(c,e)=>e.matrixinput?.input.reduce(((c,e)=>""!==e.value?c+(0,eN.b_)(e.value,0):c),0)??0,getAnswerValue(c,e){const a={},t={};return c.config.matrixinput?.interface?.rows.forEach((e=>{a[e.itemId]=(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0)})),c.config.matrixinput?.interface?.columns.forEach((e=>{t[e.itemId]=(0,i.jsx)(eN.br,{nodes:(0,eN.bs)(e.label),mode:"singleline",currentElementId:c.id},void 0)})),(0,i.jsx)(eN.ax.Generic,{children:c.config.matrixinput?.interface?.rows.map((s=>(0,i.jsxs)(HM.Fragment,{children:[(0,i.jsx)("h4",{children:a[s.itemId]??(0,eN._)("Unknown row","wp-eform")},void 0),c.config.matrixinput?.interface?.columns.map((c=>(0,i.jsxs)(HM.Fragment,{children:[(0,i.jsx)("h5",{children:t[c.itemId]??(0,eN._)("Unknown column","wp-eform")},void 0),(0,i.jsx)("p",{children:e.matrixinput?.input.find((e=>e.columnId===c.itemId&&e.rowId===s.itemId))?.value??OO.matrixInput},void 0)]},c.itemId)))]},s.itemId)))},void 0)},getPresetValue(c,e){const a=[];return c.config.matrixinput?.interface?.rows.forEach((e=>{c.config.matrixinput?.interface?.columns.forEach((c=>{a.push({rowId:e.itemId,columnId:c.itemId,value:""})}))})),(0,eN.bX)(e,(e=>{e.matrixinput.input=a,(0,eN.b$)(c.config.matrixinput?.attributes.defaultValue)||(e.matrixinput.input=DO(c.config.matrixinput?.attributes.defaultValue,c.config.matrixinput))}))}},IO=_y`
	query CountriesDataSet {
		dataSetAllItems(dataSetId: "country") {
			id
			label
			decoration
		}
	}
`,PO=_y`
	query StatesDataSet($countryId: ID!) {
		dataSetItem(dataSetId: "country", itemId: $countryId) {
			id
			extras
		}
	}
`;function RO(c){const{fields:e,restrictCountries:a,onSelectCountry:t,...s}=c,{data:n,loading:r,error:o}=Gy(IO),[l,{data:f,loading:h,error:m}]=function(c,e){var a,i=(0,HM.useRef)(new Set),t=(0,HM.useRef)(),s=t.current?Xx(e,t.current):e,n=Yy(Xy(e),null!==(a=null==s?void 0:s.query)&&void 0!==a?a:c),r=n.useQuery(gM(gM({},s),{skip:!t.current})),o=r.observable.options.initialFetchPolicy||n.getDefaultFetchPolicy(),l=Object.assign(r,{called:!!t.current}),f=(0,HM.useMemo)((function(){for(var c={},e=function(e){var a=l[e];c[e]=function(){return t.current||(t.current=Object.create(null),n.forceUpdate()),a.apply(this,arguments)}},a=0,i=Jy;a<i.length;a++)e(i[a]);return c}),[]);return Object.assign(l,f),(0,HM.useEffect)((function(){return function(){i.current.forEach((function(c){c.abort()}))}}),[]),[(0,HM.useCallback)((function(c){var e=new AbortController;i.current.add(e),t.current=c?gM(gM({},c),{fetchPolicy:c.fetchPolicy||o}):{fetchPolicy:o};var a=n.asyncUpdate(e.signal).then((function(c){return i.current.delete(e),Object.assign(c,f)}));return a.catch((function(){i.current.delete(e)})),a}),[]),l]}(PO),u=(0,HM.useRef)(!1);(0,HM.useEffect)((()=>{if(!u.current&&""!==e.country&&n){const c=n?.dataSetAllItems.find((c=>c.label===e.country));c&&l({variables:{countryId:c.id}}),u.current=!0}}),[n,e.country,l]);const p=(0,HM.useMemo)((()=>{let c=[];return n&&n.dataSetAllItems.forEach((e=>{const a=JSON.parse(e.decoration??"");c.push({icon:a?.emoji,id:e.id,label:e.label,plain:e.label,value:e.label})})),a&&a.length&&(c=c.filter((c=>a.includes(c.id)))),c}),[n,a]),d=(0,HM.useMemo)((()=>{const c=[];if(""!==e.country&&f&&!h&&!m){const e=JSON.parse(f.dataSetItem?.extras??"");e&&Array.isArray(e?.states)&&e.states.forEach((e=>{c.push({id:e.id,label:e.name,plain:e.name,value:e.name})}))}return c}),[e.country,f,m,h]);return(0,i.jsx)(Vk,Object.assign({},s,{fields:e,countries:p,countriesLoading:r,countriesError:!!o,states:d,statesLoading:h,statesError:!!m,onSelectCountry:c=>{const e=n?.dataSetAllItems.find((e=>e.label===c));e&&l({variables:{countryId:e.id}}),t?.(c)}}),void 0)}function BO(c,e){const a={city:"",country:"",fieldOne:"",fieldTwo:"",state:"",zip:""};let i;try{i=JSON.parse("string"==typeof c?c:""),(0,eN.c6)(i,"addressvalue")&&"object"==typeof i.data&&zk.forEach((c=>{"string"==typeof i.data[c]&&(a[c]=i.data[c])}))}catch(c){}return a}function $O(c){return{fieldOne:{enabled:!!c.interface?.fieldOne,placeholder:c.interface?.fieldOnePlaceholder},fieldTwo:{enabled:!!c.interface?.fieldTwo,placeholder:c.interface?.fieldTwoPlaceholder},country:{enabled:!!c.interface?.showCountry,placeholder:c.interface?.countryPlaceholder},state:{enabled:!!c.interface?.showState,placeholder:c.interface?.statePlaceholder},city:{enabled:!!c.interface?.showCity,placeholder:c.interface?.cityPlaceholder},zip:{enabled:!!c.interface?.showZip,placeholder:c.interface?.zipPlaceholder}}}function qO(c){return zk.filter((e=>{switch(e){case"city":return!!c.interface?.showCity;case"country":return!!c.interface?.showCountry;case"fieldOne":return!!c.interface?.fieldOne;case"fieldTwo":return!!c.interface?.fieldTwo;case"state":return!!c.interface?.showState;case"zip":return!!c.interface?.showZip;default:return!1}}))}const UO={id:"address",hasSubmission:!0,FormUi({elementData:c,setElementTouched:e,submissionData:a,updateSubmissionData:t,id:s,controlAlignment:n,controlType:r,hasError:o}){const l=(0,HM.useMemo)((()=>$O(c.config.address)),[c.config.address]);return(0,i.jsx)(RO,{fields:a.value.address,configuration:l,updateField:c=>{t({...a,value:{...a.value,address:{...a.value.address,...c}}})},className:c.appearance?.className,controlAlignment:n,controlType:r,disableAllIcons:c.config.address?.interface?.disableIcons,hasError:o,id:s,name:s,restrictCountries:c.config.address?.interface?.restrictCountries,readOnly:c.config.address?.attributes.readonly,onBlur:()=>{e(!0)}},void 0)},getErrors(c,e){const a=c.config.address?.validation?.required;return a?qO(c.config.address).filter((c=>"fieldTwo"!==c)).every((c=>!!e.address?.[c]))?[]:[eN.bY.requiredAddress]:[]},isQuestion:!0,isRequired:c=>!!c.config.address?.validation?.required,setValue(c,e,a){const i=BO(c,e.config.address);a.address=i},isConditionTrue(c,e,a,i,t,s){let n=!1;const r=BO(i,s.config.address),o=[];return qO(s.config.address).forEach((c=>{""!==r[c]&&(a===eN.E.EQUALS_TO?o.push(t.address?.[c].toLowerCase()===r[c].toLowerCase()):o.push(!!t.address?.[c].toLowerCase().includes(r[c].toLowerCase())))})),n=a===eN.E.EQUALS_TO?o.every((c=>!0===c)):o.some((c=>!0===c)),(0,eN.c8)(e,n)},getDisplayValue(c,e){const a=$O(c.config.address),t=zk.map((c=>({field:c,children:(0,i.jsx)(HM.Fragment,{children:a[c].enabled?(0,i.jsxs)(i.Fragment,{children:[a[c].placeholder??c," ",e.address?.[c]]},void 0):null},c)})));return(0,i.jsx)(i.Fragment,{children:t.map(((c,e)=>(0,i.jsxs)(HM.Fragment,{children:[c.children,e!==t.length-1?(0,eN.a5)(", ","address-item-separator","wp-eform"):""]},c.field)))},void 0)},getAnswerValue(c,e){const a=$O(c.config.address);return(0,i.jsx)(eN.ax.Generic,{children:zk.map((c=>(0,i.jsx)(HM.Fragment,{children:a[c].enabled?(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:a[c].placeholder??c},void 0),(0,i.jsx)("br",{},void 0),e.address?.[c]]},void 0):null},c)))},void 0)},getPresetValue:(c,e)=>(0,eN.bX)(e,(a=>{if(!(0,eN.b$)(c.config.address?.attributes.defaultValue)){const e=BO(c.config.address?.attributes.defaultValue,c.config.address);a.address=e}if(c.config.address?.attributes.prefilType===eN.n.URL&&zk.forEach((e=>{const i=(0,eN.c0)(window.location.search,`${c.config.address.attributes.prefilParameter}${e}`);i&&"string"==typeof i&&(a.address[e]=i)})),c.config.address?.attributes.prefilType===eN.n.META){const i=(0,eN.c1)(c.extras);i&&i.metaValue&&"object"==typeof i.metaValue&&(a.address.city=i.metaValue.city??e.address?.city,a.address.country=i.metaValue.country??e.address?.country,a.address.fieldOne=i.metaValue.fieldOne??e.address?.fieldOne,a.address.fieldTwo=i.metaValue.fieldTwo??e.address?.fieldTwo,a.address.state=i.metaValue.state??e.address?.state,a.address.zip=i.metaValue.zip??e.address?.zip)}}))},ZO={id:"toggle",hasSubmission:!0,neededPlan:"starter",FormUi:({elementData:c,id:e,setElementTouched:a,submissionData:t,updateSubmissionData:s,controlAlignment:n,hasError:r})=>(0,eN.bx)("starter")?(0,i.jsx)(QA,{id:e,onChange:c=>{s((0,eN.bX)(t,(e=>{e.value.toggle.selected=c}))),a(!0)},value:t.value.toggle.selected,activeIcon:c.config.toggle?.interface?.activeIcon,inactiveIcon:c.config.toggle?.interface?.inactiveIcon,hasError:r,disabled:c.config.toggle?.attributes.readonly,label:(0,i.jsx)(eN.br,{mode:"singleline",nodes:(0,eN.bs)(c.appearance?.title),currentElementId:c.id},void 0),controlAlignment:n,name:e,className:c.appearance?.className,onBlur:()=>{a(!0)}},void 0):(0,i.jsx)("p",{children:"Not implemented."},void 0),getErrors(c,e){const a=[];return!!c.config.toggle?.validation?.required&&!e.toggle?.selected&&a.push(eN.bY.requiredToggle),a},isQuestion:!0,isQuestionTitleHidden:!0,isRequired:c=>!!c.config.toggle?.validation?.required,setValue(c,e,a){a.toggle.selected="true"===c},isConditionTrue(c,e,a,i,t){let s=!1;const n="true"===i;return a===eN.E.EQUALS_TO&&(s=n===t.toggle.selected),e===eN.c.IS?s:!s},getDisplayValue:(c,e)=>e.toggle.selected?(0,i.jsx)(eN.c9,{mode:"singleline",nodes:(0,eN.bs)(c.config.toggle?.interface?.activeLabel??(0,eN._)("Yes","wp-eform"))},void 0):(0,i.jsx)(eN.c9,{mode:"singleline",nodes:(0,eN.bs)(c.config.toggle?.interface?.inactiveLabel??(0,eN._)("No","wp-eform"))},void 0),getNumericValue:(c,e)=>e.toggle.selected?1:0,getAnswerValue:(c,e)=>e.toggle.selected?(0,i.jsx)(eN.br,{currentElementId:c.id,mode:"singleline",nodes:(0,eN.bs)(c.config.toggle?.interface?.activeLabel??(0,eN._)("Yes","wp-eform"))},void 0):(0,i.jsx)(eN.br,{currentElementId:c.id,mode:"singleline",nodes:(0,eN.bs)(c.config.toggle?.interface?.inactiveLabel??(0,eN._)("No","wp-eform"))},void 0),getPresetValue:(c,e)=>(0,eN.bX)(e,(e=>{if((0,eN.b$)(c.config.toggle?.attributes.defaultValue)||(e.toggle.selected="true"===c.config.toggle.attributes.defaultValue),c.config.toggle?.attributes.prefilType===eN.n.URL){const a=(0,eN.c0)(window.location.search,c.config.toggle.attributes.prefilParameter);"true"===a?e.toggle.selected=!0:"false"===a&&(e.toggle.selected=!1)}if(c.config.toggle?.attributes.prefilType===eN.n.META){const a=(0,eN.c1)(c.extras);if(a&&a.metaValue){const c=a.metaValue;"boolean"==typeof c&&(e.toggle.selected=c)}}}))};eN.c4.addItem(ME.id,ME),eN.c4.addItem(mO.id,mO),eN.c4.addItem(uO.id,uO),eN.c4.addItem(HO.id,HO),eN.c4.addItem(VO.id,VO),eN.c4.addItem(MO.id,MO),eN.c4.addItem(CO.id,CO),eN.c4.addItem(gO.id,gO),eN.c4.addItem(kO.id,kO),eN.c4.addItem(EO.id,EO),eN.c4.addItem(_O.id,_O),eN.c4.addItem(jO.id,jO),eN.c4.addItem(UO.id,UO),eN.c4.addItem(ZO.id,ZO);const QO=(0,eN.cj)({primary:{"050":"#E0FCFF",100:"#BEF8FD",200:"#87EAF2",300:"#54D1DB",400:"#38BEC9",500:"#2CB1BC",600:"#14919B",700:"#0E7C86",800:"#0A6C74",900:"#044E54"},neutrals:{"050":"#F0F4F8",100:"#D9E2EC",200:"#BCCCDC",300:"#9FB3C8",400:"#829AB1",500:"#627D98",600:"#486581",700:"#334E68",800:"#243B53",900:"#102A43"},accent:{700:"#35469C"}}),XO=(0,eN.cj)({primary:{"050":"#DCEEFB",100:"#B6E0FE",200:"#84C5F4",300:"#62B0E8",400:"#4098D7",500:"#2680C2",600:"#186FAF",700:"#0F609B",800:"#0A558C",900:"#003E6B"},neutrals:{"050":"#F0F4F8",100:"#D9E2EC",200:"#BCCCDC",300:"#9FB3C8",400:"#829AB1",500:"#627D98",600:"#486581",700:"#334E68",800:"#243B53",900:"#102A43"},accent:{700:"#CB6E17"}}),WO=(0,eN.cj)({primary:{"050":"#E6E6FF",100:"#C4C6FF",200:"#A2A5FC",300:"#8888FC",400:"#7069FA",500:"#5D55FA",600:"#4D3DF7",700:"#3525E6",800:"#1D0EBE",900:"#0C008C"},neutrals:{"050":"#F0F4F8",100:"#D9E2EC",200:"#BCCCDC",300:"#9FB3C8",400:"#829AB1",500:"#627D98",600:"#486581",700:"#334E68",800:"#243B53",900:"#102A43"},accent:{700:"#147D64"}}),GO=(0,eN.cj)({primary:{"050":"#EFFCF6",100:"#C6F7E2",200:"#8EEDC7",300:"#65D6AD",400:"#3EBD93",500:"#27AB83",600:"#199473",700:"#147D64",800:"#0C6B58",900:"#014D40"},neutrals:{"050":"#F0F4F8",100:"#D9E2EC",200:"#BCCCDC",300:"#9FB3C8",400:"#829AB1",500:"#627D98",600:"#486581",700:"#334E68",800:"#243B53",900:"#102A43"},accent:{700:"#0F609B"}}),YO=(0,eN.cj)({primary:{"050":"#F0F4F8",100:"#D9E2EC",200:"#BCCCDC",300:"#9FB3C8",400:"#829AB1",500:"#627D98",600:"#486581",700:"#334E68",800:"#243B53",900:"#102A43"},accent:{700:"#127FBF"}}),KO=(0,eN.cj)({primary:{"050":"#FFEEEE",100:"#FACDCD",200:"#F29B9B",300:"#E66A6A",400:"#D64545",500:"#BA2525",600:"#A61B1B",700:"#911111",800:"#780A0A",900:"#610404"},neutrals:{"050":"#FAF9F7",100:"#E8E6E1",200:"#D3CEC4",300:"#B8B2A7",400:"#A39E93",500:"#857F72",600:"#625D52",700:"#504A40",800:"#423D33",900:"#27241D"},accent:{700:"#CB6E17"}}),JO=(0,eN.cj)({primary:{"050":"#E0FCFF",100:"#BEF8FD",200:"#87EAF2",300:"#54D1DB",400:"#38BEC9",500:"#2CB1BC",600:"#14919B",700:"#0E7C86",800:"#0A6C74",900:"#044E54"},neutrals:{"050":"#FAF9F7",100:"#E8E6E1",200:"#D3CEC4",300:"#B8B2A7",400:"#A39E93",500:"#857F72",600:"#625D52",700:"#504A40",800:"#423D33",900:"#27241D"},accent:{700:"#0F609B"}}),cF=(0,eN.cj)({primary:{"050":"#E3F8FF",100:"#B3ECFF",200:"#81DEFD",300:"#5ED0FA",400:"#40C3F7",500:"#2BB0ED",600:"#1992D4",700:"#127FBF",800:"#0B69A3",900:"#035388"},neutrals:{"050":"#F5F7FA",100:"#E4E7EB",200:"#CBD2D9",300:"#9AA5B1",400:"#7B8794",500:"#616E7C",600:"#52606D",700:"#3E4C59",800:"#323F4B",900:"#1F2933"},accent:{700:"#A30664"}}),eF=(0,eN.cj)({primary:{"050":"#E0E8F9",100:"#BED0F7",200:"#98AEEB",300:"#7B93DB",400:"#647ACB",500:"#4C63B6",600:"#4055A8",700:"#35469C",800:"#2D3A8C",900:"#19216C"},neutrals:{"050":"#F5F7FA",100:"#E4E7EB",200:"#CBD2D9",300:"#9AA5B1",400:"#7B8794",500:"#616E7C",600:"#52606D",700:"#3E4C59",800:"#323F4B",900:"#1F2933"},accent:{700:"#127FBF"}}),aF=(0,eN.cj)({primary:{"050":"#FFE3EC",100:"#FFB8D2",200:"#FF8CBA",300:"#F364A2",400:"#E8368F",500:"#DA127D",600:"#BC0A6F",700:"#A30664",800:"#870557",900:"#620042"},neutrals:{"050":"#F5F7FA",100:"#E4E7EB",200:"#CBD2D9",300:"#9AA5B1",400:"#7B8794",500:"#616E7C",600:"#52606D",700:"#3E4C59",800:"#323F4B",900:"#1F2933"},accent:{700:"#690CB0"}});function iF(c){const{overrideDarkMode:e,increaseViewCount:a=!0,...t}=c;return(0,i.jsx)(eN.cl,Object.assign({darkMode:e},{children:(0,i.jsx)(cN,Object.assign({client:GA},{children:(0,i.jsx)(VE,Object.assign({},t,{increaseViewCount:a}),void 0)}),void 0)}),void 0)}eN.ck.addItem("premcyanthree",{config:JO,name:"Premium Cyan Three"},1),eN.ck.addItem("premcyantwo",{config:GO,name:"Premium Cyan Two"},1),eN.ck.addItem("prempink",{config:aF,name:"Premium Pink"}),eN.ck.addItem("prempurple",{config:WO,name:"Premium Purple"},1),eN.ck.addItem("premred",{config:KO,name:"Premium Red"},1),eN.ck.addItem("premblue",{config:XO,name:"Premium Blue"},1),eN.ck.addItem("prembluegrey",{config:YO,name:"Premium Blue Grey"}),eN.ck.addItem("premcyan",{config:QO,name:"Premium Cyan"},1),eN.ck.addItem("premindigo",{config:eF,name:"Premium Indigo"},1),eN.ck.addItem("premlightblue",{config:cF,name:"Premium Light Blue"},1),t.vI.add(Hc,jH,vM),a(7762),a(9864),a(7814)}}]);