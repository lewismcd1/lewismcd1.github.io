(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9828)}])},9828:function(e,t,n){"use strict";n.r(t),n.d(t,{Button_10f4b3c7c4d4e559bc38cfd30bf538d3:function(){return X},Button_a579289ca6ee76769bc3626584345a69:function(){return E},Debounceinput_1fc7485fe4dc8d4086763f39bc5e364b:function(){return F},Debounceinput_31b0c9369af98d99f1ff51c789935112:function(){return H},Debounceinput_8e13edbbc3da3bb6665e3ff8f6195fb5:function(){return N},Div_bd4c022a8f796682aa6392e9d4c102e9:function(){return A},Fragment_5c1e4a3395e327fb5e64ae8a0b243beb:function(){return B},Fragment_9017984ada32ffa55f5d2870ebd3c887:function(){return z},Segmentedcontrol__root_038dc03492316870a93471e2886126e7:function(){return I},Toaster_6e6ebf8d7ce589d59b7d382fb7576edf:function(){return T},default:function(){return W}});var r=n(2729),i=n(5944),a=n(7294),c=n(8039),s=n(9654),o=n(2658),d=n(8007),l=n(4882),m=n(554),g=n(1209),p=n(3416),h=n(3488),x=n(1181),u=n(917),f=n(4712),b=n(3954),_=n(6526),w=n(1664),S=n.n(w),k=n(775),Z=n(9008),y=n.n(Z);function C(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return C=function(){return e},e}function B(){let e=(0,a.useContext)(c.StateContexts.reflex___state____state__py_portfolio___py_portfolio____state);return(0,i.tZ)(a.Fragment,{children:(0,s.isTrue)(e.status.includes("successfully"))?(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(_.Text,{as:"p",css:{color:"green",marginTop:"1rem"},children:e.status})}):(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(_.Text,{as:"p",css:{color:"red",marginTop:"1rem"},children:e.status})})})}let v=(0,u.keyframes)(C());function z(){let[e,t]=(0,a.useContext)(c.EventLoopContext);return(0,i.tZ)(a.Fragment,{children:(0,s.isTrue)(t.length>0)?(0,i.tZ)(a.Fragment,{children:(0,i.tZ)(o.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:v+" 1s infinite"},size:32})}):(0,i.tZ)(a.Fragment,{})})}function T(){let{resolvedColorMode:e}=(0,a.useContext)(c.ColorModeContext);s.refs.__toast=f.Am;let[t,n]=(0,a.useContext)(c.EventLoopContext),r={description:"Check if server is reachable at "+(0,s.getBackendURL)(b.Ks).href,closeButton:!0,duration:12e4,id:"websocket-error"},[o,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{n.length>=2?o||f.Am.error("Cannot connect to server: ".concat(n.length>0?n[n.length-1].message:"","."),{...r,onDismiss:()=>d(!0)}):(f.Am.dismiss("websocket-error"),d(!1))},[n]),(0,i.tZ)(f.x7,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}function F(){let e=(0,a.useContext)(c.StateContexts.reflex___state____state__py_portfolio___py_portfolio____state),[t,n]=(0,a.useContext)(c.EventLoopContext),r=(0,a.useCallback)(e=>t([(0,s.Event)("reflex___state____state.py_portfolio___py_portfolio____state.set_name",{value:e.target.value},{})],[e],{}),[t,s.Event]);return(0,i.tZ)(k.DebounceInput,{css:{"@media screen and (min-width: 0)":{width:"90%"},"@media screen and (min-width: 30em)":{width:"80%"},"@media screen and (min-width: 48em)":{width:"80%"},spacing:"2"},debounceTimeout:300,element:_.TextField.Root,onChange:r,placeholder:"Name",value:e.name})}function X(){let[e,t]=(0,a.useContext)(c.EventLoopContext),n=(0,a.useCallback)(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e([(0,s.Event)("reflex___state____state.py_portfolio___py_portfolio____state.scroll_to_top",{},{})],n,{})},[e,s.Event]);return(0,i.tZ)(_.Button,{css:{position:"fixed",bottom:"2rem",right:"2rem",padding:"0.5rem",fontSize:"1.5rem",borderRadius:"50%",background:"rgba(0, 0, 0, 0.6)",color:"white",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.2)",transition:"background 0.3s ease","&:hover":{background:"rgba(0, 0, 0, 0.8)"},"&:active":{background:"rgba(0, 0, 0, 0.9)"}},onClick:n,children:"↑"})}function I(){let{setColorMode:e}=(0,a.useContext)(c.ColorModeContext),{rawColorMode:t}=(0,a.useContext)(c.ColorModeContext),[n,r]=(0,a.useContext)(c.EventLoopContext),o=(0,a.useCallback)(e,[n,s.Event,e]);return(0,i.BX)(_.SegmentedControl.Root,{css:{spacing:"2"},onValueChange:o,radius:"large",value:t,variant:"classic",children:[(0,i.tZ)(_.SegmentedControl.Item,{value:"light",children:(0,i.tZ)(d.Z,{css:{color:"var(--current-color)"},size:15})}),(0,i.tZ)(_.SegmentedControl.Item,{value:"dark",children:(0,i.tZ)(l.Z,{css:{color:"var(--current-color)"},size:15})})]})}function A(){let[e,t]=(0,a.useContext)(c.EventLoopContext);return(0,i.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: "+(t.length>0?t[t.length-1].message:""),children:(0,i.tZ)(z,{})})}function N(){let e=(0,a.useContext)(c.StateContexts.reflex___state____state__py_portfolio___py_portfolio____state),[t,n]=(0,a.useContext)(c.EventLoopContext),r=(0,a.useCallback)(e=>t([(0,s.Event)("reflex___state____state.py_portfolio___py_portfolio____state.set_message",{value:e.target.value},{})],[e],{}),[t,s.Event]);return(0,i.tZ)(k.DebounceInput,{css:{"@media screen and (min-width: 0)":{width:"90%"},"@media screen and (min-width: 30em)":{width:"80%"},"@media screen and (min-width: 48em)":{width:"80%"},spacing:"2"},debounceTimeout:300,element:_.TextArea,onChange:r,placeholder:"Message",value:e.message})}function E(){let[e,t]=(0,a.useContext)(c.EventLoopContext),n=(0,a.useCallback)(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e([(0,s.Event)("reflex___state____state.py_portfolio___py_portfolio____state.handle_submit",{},{})],n,{})},[e,s.Event]);return(0,i.tZ)(_.Button,{color:"blue",css:{"@media screen and (min-width: 0)":{width:"90%"},"@media screen and (min-width: 30em)":{width:"80%"},"@media screen and (min-width: 48em)":{width:"80%"},spacing:"2"},onClick:n,children:"Send"})}function H(){let e=(0,a.useContext)(c.StateContexts.reflex___state____state__py_portfolio___py_portfolio____state),[t,n]=(0,a.useContext)(c.EventLoopContext),r=(0,a.useCallback)(e=>t([(0,s.Event)("reflex___state____state.py_portfolio___py_portfolio____state.set_email",{value:e.target.value},{})],[e],{}),[t,s.Event]);return(0,i.tZ)(k.DebounceInput,{css:{"@media screen and (min-width: 0)":{width:"90%"},"@media screen and (min-width: 30em)":{width:"80%"},"@media screen and (min-width: 48em)":{width:"80%"},spacing:"2"},debounceTimeout:300,element:_.TextField.Root,onChange:r,placeholder:"Email",type:"email",value:e.email})}function W(){let e=(0,a.useRef)(null);return s.refs.ref_footer=e,(0,i.BX)(a.Fragment,{children:[(0,i.BX)(a.Fragment,{children:[(0,i.tZ)(A,{}),(0,i.tZ)(T,{})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{"@keyframes dots":{"0%":{backgroundPosition:"0 0"},"100%":{backgroundPosition:"40px 40px"}},animation:"dots 4s linear infinite alternate-reverse both",background:"radial-gradient(circle, rgba(128,128,128,0.3) 1px, transparent 1px)",backgroundSize:"25px 25px",light:{background:"radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)",backgroundSize:"25px 25px",animation:"dots 4s linear infinite alternate-reverse both"},dark:{background:"radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",backgroundSize:"25px 25px",animation:"dots 4s linear infinite alternate-reverse both"}},direction:"column",gap:"3",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",height:"50px","@media screen and (min-width: 0)":{padding:"0rem 1rem"},"@media screen and (min-width: 30em)":{padding:"0rem 1rem"},"@media screen and (min-width: 48em)":{padding:"0rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0rem 8rem"},"@media screen and (min-width: 80em)":{padding:"0rem 8rem"},transition:"all 550ms ease",position:"sticky",top:"0",zIndex:"1000",marginTop:"0.5rem"},direction:"row",gap:"3",children:[(0,i.tZ)(_.Flex,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,i.tZ)(_.Box,{children:(0,i.tZ)(I,{})})]}),(0,i.BX)(_.Box,{css:{width:"100%"},children:[(0,i.tZ)(_.Box,{css:{"@media screen and (min-width: 0)":{display:"none"},"@media screen and (min-width: 30em)":{display:"block"},"@media screen and (min-width: 48em)":{display:"block"},"@media screen and (min-width: 62em)":{display:"block"}},children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",minHeight:"84vh",padding:"15rem 0rem",alignItems:"center",justifyContent:"start",flex:"1"},direction:"column",gap:"7",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(_.Heading,{css:{background:"linear-gradient(to right, rgba(169, 169, 169, 0.8), rgba(105, 105, 105, 0.8))",backgroundClip:"text","-webkit-background-clip":"text","-moz-background-clip":"text",color:"transparent",display:"inline-block",whiteSpace:"nowrap",lineHeight:"1.2",padding:"0.2em 0",verticalAlign:"middle","@media screen and (min-width: 0)":{fontSize:"2rem"},"@media screen and (min-width: 30em)":{fontSize:"2.85rem"},"@media screen and (min-width: 48em)":{fontSize:"4rem"},"@media screen and (min-width: 62em)":{fontSize:"5rem"},"@media screen and (min-width: 80em)":{fontSize:"5rem"},fontWeight:"900"},children:"Hi, I'm Lewis"}),(0,i.tZ)(_.Heading,{css:{"@keyframes wave":{"0%":{transform:"rotate(45deg)"},"100%":{transform:"rotate(-15deg)"}},animation:"wave 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate-reverse both",fontSize:"2rem",fontWeight:"900",verticalAlign:"middle"},children:"\ud83d\udc4b\ud83c\udffb"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,i.tZ)(_.Badge,{css:{"@media screen and (min-width: 0)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 30em)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 48em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 80em)":{padding:"0.15rem 1rem"}},variant:"solid",children:"Cloud Security Engineer"}),(0,i.tZ)(_.Badge,{css:{"@media screen and (min-width: 0)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 30em)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 48em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 80em)":{padding:"0.15rem 1rem"}},variant:"solid",children:"Security Engineer"}),(0,i.tZ)(_.Badge,{css:{"@media screen and (min-width: 0)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 30em)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 48em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 80em)":{padding:"0.15rem 1rem"}},variant:"solid",children:"Systems Administrator"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"start"},direction:"row",gap:"2",children:[(0,i.tZ)(_.Link,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,i.tZ)(S(),{href:"https://github.com/lewismcd1",passHref:!0,children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(m.Z,{css:{boxSize:"24px",dark:{color:"rgba(255,255,255,0.7)"},color:"var(--current-color)"}}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"12px",dark:{color:"rgba(255,255,255,0)"},textAlign:"center"},children:"GitHub"})]})})}),(0,i.tZ)(_.Text,{as:"p",css:{margin:"0 8px",dark:{color:"rgba(255,255,255,0)"}},children:""}),(0,i.tZ)(_.Link,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,i.tZ)(S(),{href:"https://www.linkedin.com/in/lewis-mcdonald-6083b3153",passHref:!0,children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(g.Z,{css:{boxSize:"24px",dark:{color:"rgba(255,255,255,0.7)"},color:"var(--current-color)"}}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"12px",dark:{color:"rgba(255,255,255,0)"},textAlign:"center"},children:"LinkedIn"})]})})})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"center",padding:"6",marginTop:"20rem"},direction:"column",gap:"6",children:[(0,i.tZ)(_.Box,{css:{animation:"fadeIn 2s ease-out",background:"black",padding:"1rem",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 255, 0, 0.3)",height:"4rem"},children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"1",children:[(0,i.tZ)(_.Heading,{css:{fontSize:"2rem",fontWeight:"700",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)"},children:"whoami"}),(0,i.tZ)(_.Text,{as:"p",css:{"@keyframes blink":{"0%":{opacity:"0"},"50%":{opacity:"1"},"100%":{opacity:"0"}},animation:"blink 1s step-end infinite",position:"relative",top:"-11px",fontSize:"2rem",fontWeight:"700",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)"},children:"_"})]})}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"1rem",dark:{color:"rgba(255, 255, 255, 0.7)"},lineHeight:"1.5",spacing:"3",textAlign:"center",width:"80%"},children:"I am a Cloud Security Engineer specializing in protecting cloud-based infrastructures. I work with various cloud platforms to design, implement, and manage security measures that ensure the confidentiality, integrity, and availability of cloud environments."})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{justifyContent:"center",alignItems:"center"},direction:"row",gap:"4",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udc0d"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Python"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udcbb"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Bash"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udd27"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"PowerShell"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"☁️"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"AWS/Azure"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udc0b"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Docker"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"⚙️"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Kubernetes"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udee0️"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"CloudFormation"})]})]}),(0,i.BX)(_.Box,{css:{spacing:"6",alignItems:"center",justifyContent:"center",padding:"6",marginTop:"20rem"},children:[(0,i.tZ)(_.Heading,{css:{fontSize:"2rem",fontWeight:"600",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)",marginBottom:"0.5rem",textAlign:"center"},children:"Certifications"}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"center",dark:{color:"rgba(255, 255, 255, 0.7)"},marginTop:"2rem",marginBottom:"4rem"},direction:"column",gap:"2",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(p.Z,{css:{boxSize:"24px",color:"rgba(0, 255, 0, 0.8)"}}),(0,i.tZ)(_.Text,{as:"p",children:"AWS Certified Security – Specialty"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(h.Z,{css:{boxSize:"24px",color:"rgba(0, 255, 0, 0.8)"}}),(0,i.tZ)(_.Text,{as:"p",children:"Certified Information Systems Security Professional (CISSP)"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(x.Z,{css:{boxSize:"24px",color:"rgba(0, 255, 0, 0.8)"}}),(0,i.tZ)(_.Text,{as:"p",children:"Certified Cloud Security Professional (CCSP)"})]})]}),(0,i.tZ)(_.Heading,{css:{fontSize:"2rem",fontWeight:"600",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)",marginTop:"1rem",marginBottom:"0.5rem",textAlign:"center"},children:"Projects"}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{justifyContent:"center",alignItems:"center"},direction:"row",gap:"2",wrap:"wrap",children:[(0,i.BX)(_.Box,{css:{width:"300px",margin:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"},children:[(0,i.tZ)("img",{alt:"AWS Security Architecture",css:{transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"},width:"100%",height:"auto"},src:"https://media.licdn.com/dms/image/D4D12AQG49qCkkRk6aw/article-cover_image-shrink_720_1280/0/1691813758023?e=2147483647&v=beta&t=P-f10sxwCtfIc0lWnyFTf9z_7Z14jtsT8K2XcXx1DxQ"}),(0,i.BX)(_.Box,{css:{padding:"1rem"},children:[(0,i.tZ)(_.Heading,{size:"md",children:"AWS Security Architecture"}),(0,i.tZ)(_.Text,{as:"p",children:"Implemented a multi-layer security architecture for a large-scale AWS deployment."})]})]}),(0,i.BX)(_.Box,{css:{width:"300px",margin:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"},children:[(0,i.tZ)("img",{alt:"Automated Compliance Checks",css:{transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"},width:"100%",height:"auto"},src:"https://www.eqs.com/assets/2021/03/EQS-Blog_Compliance-Management.jpg"}),(0,i.BX)(_.Box,{css:{padding:"1rem"},children:[(0,i.tZ)(_.Heading,{size:"md",children:"Automated Compliance Checks"}),(0,i.tZ)(_.Text,{as:"p",children:"Developed automated security compliance checks using AWS Config and Lambda."})]})]}),(0,i.BX)(_.Box,{css:{width:"300px",margin:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"},children:[(0,i.tZ)("img",{alt:"Secure Kubernetes Cluster",css:{transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"},width:"100%",height:"auto"},src:"https://concisesoftware.com/wp-content/uploads/2020/01/Kubernetes-logo.png"}),(0,i.BX)(_.Box,{css:{padding:"1rem"},children:[(0,i.tZ)(_.Heading,{size:"md",children:"Secure Kubernetes Cluster"}),(0,i.tZ)(_.Text,{as:"p",children:"Designed and deployed a secure Kubernetes cluster on Azure. This is more text to make it the same"})]})]})]})]}),(0,i.tZ)(_.Box,{css:{spacing:"6",alignItems:"center",justifyContent:"center",padding:"5",marginTop:"20rem",width:"100%",maxWidth:"600px"},children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"center"},direction:"column",gap:"3",children:[(0,i.tZ)(_.Heading,{css:{"@media screen and (min-width: 0)":{fontSize:"1.5rem"},"@media screen and (min-width: 30em)":{fontSize:"2rem"},"@media screen and (min-width: 48em)":{fontSize:"2rem"},fontWeight:"600",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)",marginBottom:"0.5rem",textAlign:"center"},children:"Contact"}),(0,i.tZ)(F,{}),(0,i.tZ)(H,{}),(0,i.tZ)(N,{}),(0,i.tZ)(E,{}),(0,i.tZ)(B,{})]})}),(0,i.tZ)(_.Box,{children:(0,i.tZ)(X,{})})]})}),(0,i.tZ)(_.Box,{css:{"@media screen and (min-width: 0)":{display:"block"},"@media screen and (min-width: 30em)":{display:"none"},"@media screen and (min-width: 48em)":{display:"none"},"@media screen and (min-width: 62em)":{display:"none"}},children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",minHeight:"84vh",padding:"15rem 0rem",alignItems:"center",justifyContent:"start"},direction:"column",gap:"3",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(_.Heading,{css:{background:"linear-gradient(to right, rgba(169, 169, 169, 0.8), rgba(105, 105, 105, 0.8))",backgroundClip:"text","-webkit-background-clip":"text","-moz-background-clip":"text",color:"transparent",display:"inline-block",whiteSpace:"nowrap",lineHeight:"1.2",padding:"0.2em 0",verticalAlign:"middle","@media screen and (min-width: 0)":{fontSize:"2rem"},"@media screen and (min-width: 30em)":{fontSize:"2.85rem"},"@media screen and (min-width: 48em)":{fontSize:"4rem"},"@media screen and (min-width: 62em)":{fontSize:"5rem"},"@media screen and (min-width: 80em)":{fontSize:"5rem"},fontWeight:"900"},children:"Hi, I'm Lewis"}),(0,i.tZ)(_.Heading,{css:{"@keyframes wave":{"0%":{transform:"rotate(45deg)"},"100%":{transform:"rotate(-15deg)"}},animation:"wave 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate-reverse both",fontSize:"2rem",fontWeight:"900",verticalAlign:"middle"},children:"\ud83d\udc4b\ud83c\udffb"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"1",children:[(0,i.tZ)(_.Badge,{css:{"@media screen and (min-width: 0)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 30em)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 48em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 80em)":{padding:"0.15rem 1rem"}},variant:"solid",children:"Cloud Security Engineer"}),(0,i.tZ)(_.Badge,{css:{"@media screen and (min-width: 0)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 30em)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 48em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 80em)":{padding:"0.15rem 1rem"}},variant:"solid",children:"Security Engineer"}),(0,i.tZ)(_.Badge,{css:{"@media screen and (min-width: 0)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 30em)":{padding:"0.15rem 0.35rem"},"@media screen and (min-width: 48em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 62em)":{padding:"0.15rem 1rem"},"@media screen and (min-width: 80em)":{padding:"0.15rem 1rem"}},variant:"solid",children:"Systems Administrator"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"start"},direction:"row",gap:"2",children:[(0,i.tZ)(_.Link,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,i.tZ)(S(),{href:"https://github.com/lewismcd1",passHref:!0,children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(m.Z,{css:{boxSize:"24px",dark:{color:"rgba(255,255,255,0.7)"},color:"var(--current-color)"}}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"12px",dark:{color:"rgba(255,255,255,0)"},textAlign:"center"},children:"GitHub"})]})})}),(0,i.tZ)(_.Text,{as:"p",css:{margin:"0 8px",dark:{color:"rgba(255,255,255,0)"}},children:""}),(0,i.tZ)(_.Link,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,i.tZ)(S(),{href:"https://www.linkedin.com/in/lewis-mcdonald-6083b3153",passHref:!0,children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(g.Z,{css:{boxSize:"24px",dark:{color:"rgba(255,255,255,0.7)"},color:"var(--current-color)"}}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"12px",dark:{color:"rgba(255,255,255,0)"},textAlign:"center"},children:"LinkedIn"})]})})})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"center",padding:"6",marginTop:"20rem"},direction:"column",gap:"6",children:[(0,i.tZ)(_.Box,{css:{animation:"fadeIn 2s ease-out",background:"black",padding:"1rem",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 255, 0, 0.3)",height:"4rem"},children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"1",children:[(0,i.tZ)(_.Heading,{css:{fontSize:"2rem",fontWeight:"700",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)"},children:"whoami"}),(0,i.tZ)(_.Text,{as:"p",css:{"@keyframes blink":{"0%":{opacity:"0"},"50%":{opacity:"1"},"100%":{opacity:"0"}},animation:"blink 1s step-end infinite",position:"relative",top:"-11px",fontSize:"2rem",fontWeight:"700",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)"},children:"_"})]})}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"1rem",dark:{color:"rgba(255, 255, 255, 0.7)"},lineHeight:"1.5",spacing:"3",textAlign:"center",width:"80%"},children:"I am a Cloud Security Engineer specializing in protecting cloud-based infrastructures. I work with various cloud platforms to design, implement, and manage security measures that ensure the confidentiality, integrity, and availability of cloud environments."})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{justifyContent:"center",alignItems:"center"},direction:"row",gap:"4",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udc0d"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Python"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udcbb"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Bash"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udd27"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"PowerShell"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"☁️"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"AWS/Azure"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udc0b"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Docker"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"⚙️"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"Kubernetes"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"column",gap:"2",children:[(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"36px",dark:{color:"rgba(255,255,255,0.7)"}},children:"\ud83d\udee0️"}),(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"14px",dark:{color:"rgba(255,255,255,0.7)"},textAlign:"center"},children:"CloudFormation"})]})]}),(0,i.BX)(_.Box,{css:{spacing:"6",alignItems:"center",justifyContent:"center",padding:"6",marginTop:"20rem"},children:[(0,i.tZ)(_.Heading,{css:{fontSize:"2rem",fontWeight:"600",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)",marginBottom:"0.5rem",textAlign:"center"},children:"Certifications"}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"center",dark:{color:"rgba(255, 255, 255, 0.7)"},marginTop:"2rem",marginBottom:"4rem"},direction:"column",gap:"2",children:[(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(p.Z,{css:{boxSize:"24px",color:"rgba(0, 255, 0, 0.8)"}}),(0,i.tZ)(_.Text,{as:"p",children:"AWS Certified Security – Specialty"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(h.Z,{css:{boxSize:"24px",color:"rgba(0, 255, 0, 0.8)"}}),(0,i.tZ)(_.Text,{as:"p",children:"Certified Information Systems Security Professional (CISSP)"})]}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center"},direction:"row",gap:"2",children:[(0,i.tZ)(x.Z,{css:{boxSize:"24px",color:"rgba(0, 255, 0, 0.8)"}}),(0,i.tZ)(_.Text,{as:"p",children:"Certified Cloud Security Professional (CCSP)"})]})]}),(0,i.tZ)(_.Heading,{css:{fontSize:"2rem",fontWeight:"600",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)",marginTop:"1rem",marginBottom:"0.5rem",textAlign:"center"},children:"Projects"}),(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{justifyContent:"center",alignItems:"center"},direction:"row",gap:"2",wrap:"wrap",children:[(0,i.BX)(_.Box,{css:{width:"300px",margin:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"},children:[(0,i.tZ)("img",{alt:"AWS Security Architecture",css:{transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"},width:"100%",height:"auto"},src:"https://media.licdn.com/dms/image/D4D12AQG49qCkkRk6aw/article-cover_image-shrink_720_1280/0/1691813758023?e=2147483647&v=beta&t=P-f10sxwCtfIc0lWnyFTf9z_7Z14jtsT8K2XcXx1DxQ"}),(0,i.BX)(_.Box,{css:{padding:"1rem"},children:[(0,i.tZ)(_.Heading,{size:"md",children:"AWS Security Architecture"}),(0,i.tZ)(_.Text,{as:"p",children:"Implemented a multi-layer security architecture for a large-scale AWS deployment."})]})]}),(0,i.BX)(_.Box,{css:{width:"300px",margin:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"},children:[(0,i.tZ)("img",{alt:"Automated Compliance Checks",css:{transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"},width:"100%",height:"auto"},src:"https://www.eqs.com/assets/2021/03/EQS-Blog_Compliance-Management.jpg"}),(0,i.BX)(_.Box,{css:{padding:"1rem"},children:[(0,i.tZ)(_.Heading,{size:"md",children:"Automated Compliance Checks"}),(0,i.tZ)(_.Text,{as:"p",children:"Developed automated security compliance checks using AWS Config and Lambda."})]})]}),(0,i.BX)(_.Box,{css:{width:"300px",margin:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"},children:[(0,i.tZ)("img",{alt:"Secure Kubernetes Cluster",css:{transition:"transform 0.3s ease","&:hover":{transform:"scale(1.05)"},width:"100%",height:"auto"},src:"https://concisesoftware.com/wp-content/uploads/2020/01/Kubernetes-logo.png"}),(0,i.BX)(_.Box,{css:{padding:"1rem"},children:[(0,i.tZ)(_.Heading,{size:"md",children:"Secure Kubernetes Cluster"}),(0,i.tZ)(_.Text,{as:"p",children:"Designed and deployed a secure Kubernetes cluster on Azure. This is more text to make it the same"})]})]})]})]}),(0,i.tZ)(_.Box,{css:{spacing:"6",alignItems:"center",justifyContent:"center",padding:"5",marginTop:"20rem",width:"100%",maxWidth:"600px"},children:(0,i.BX)(_.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"center",justifyContent:"center"},direction:"column",gap:"3",children:[(0,i.tZ)(_.Heading,{css:{"@media screen and (min-width: 0)":{fontSize:"1.5rem"},"@media screen and (min-width: 30em)":{fontSize:"2rem"},"@media screen and (min-width: 48em)":{fontSize:"2rem"},fontWeight:"600",fontFamily:"monospace","--default-font-family":"monospace",color:"rgba(0, 255, 0, 0.8)",marginBottom:"0.5rem",textAlign:"center"},children:"Contact"}),(0,i.tZ)(F,{}),(0,i.tZ)(H,{}),(0,i.tZ)(N,{}),(0,i.tZ)(E,{}),(0,i.tZ)(B,{})]})}),(0,i.tZ)(_.Box,{children:(0,i.tZ)(X,{})})]})})]}),(0,i.tZ)(_.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",height:"50px",alignItems:"center",justifyContent:"center"},direction:"row",id:"footer",ref:e,gap:"3",children:(0,i.tZ)(_.Text,{as:"p",css:{fontSize:"10px",fontWeight:"semibold"},children:"Copyright 2024 Lewis McDonald"})})]}),(0,i.BX)(y(),{children:[(0,i.tZ)("title",{children:"Lewis McDonald"}),(0,i.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}}},function(e){e.O(0,[49,563,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);