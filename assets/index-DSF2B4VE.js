import{r as s,h as D,j as e,S as pe,q as U,s as H,T as ee,X as me,a1 as te,L as xe,t as I}from"./index-BMVl-Mtt.js";import{T as ge}from"./index-PYlXRniC.js";import{d as he,I as ue}from"./general-Cm4G_TiE.js";import{u as fe,R as d,i as ye,L as be,a as je}from"./index-BK1a6xEB.js";import{p as ae}from"./purify.es-A66Cw1IH.js";import{I as ve,E as Se}from"./EmailRenderer-q10rabA8.js";import{i as Ne}from"./validation-DyBhvr2T.js";import{M as we}from"./Modal-D-2EcMfF.js";import{T as Q}from"./TextInput-DXYS29iK.js";import{B as se}from"./Badge-Ce3J3PcK.js";import{I as re}from"./IconCheck-DXFObQyD.js";import{S as Ce}from"./ScrollArea-sOCxlJMn.js";import{I as Le}from"./Input-C-ykHIKw.js";import{S as ke}from"./Skeleton-DJa0e9cQ.js";import{D as Ee}from"./Drawer-BAQiHY2L.js";import"./with-selector-SFepj4hT.js";import"./use-disclosure-Biz1WLrB.js";import"./clamp-DTmYCdls.js";import"./SimpleGrid-DLG9sx1u.js";import"./get-base-value-lGyAsJ3S.js";import"./create-optional-context-ClWRBPss.js";import"./CheckIcon-DLCDO5lT.js";import"./InputBase-MxbXVjlG.js";import"./to-int-PQE0s6ay.js";function Te(){const[a,t]=s.useState([]),[n,c]=s.useState(!0),[p,k]=s.useState(!1),[x,b]=s.useState(""),[f,j]=s.useState(1),[g,v]=s.useState(!0),[S,E]=s.useState(0),N=s.useRef(!1),y=s.useCallback(async($=1,T=!1)=>{if(!N.current){N.current=!0,T?k(!0):c(!0);try{const o=new URLSearchParams;o.append("page",String($)),x&&o.append("search",x);const l=await D.request(`api/lemlist/leads?${o.toString()}`,{method:"GET"});if(l!=null&&l.data){const m=l.data.leads||[],z=l.data.totalPages||1,A=l.data.page||$;t(T?C=>[...C,...m]:m),j(A),v(A<z),E(l.data.total||0)}}catch(o){console.error("Error fetching lemlist leads:",o)}finally{c(!1),k(!1),N.current=!1}}},[x]);s.useEffect(()=>{y(1,!1)},[y]);const w=s.useCallback(()=>{g&&y(f+1,!0)},[g,f,y]);return{leads:a,loading:n,loadingMore:p,search:x,setSearch:b,page:f,hasMore:g,total:S,fetchNext:w}}const ze={"do-not-contact":"red","not-interested":"red",complaint:"red",bounce:"red","security-blocked":"red","ticket-or-ack":"yellow","positive-not-qualified-wrong-geo":"orange","positive-not-qualified-wrong-industry":"orange","positive-not-qualified-wrong-company-type":"orange","positive-not-qualified-wrong-size":"orange","positive-not-qualified-wrong-scope":"orange","positive-not-qualified-already-solved":"orange","positive-not-qualified-not-a-buyer":"orange",power:"purple",information:"yellow",pricing:"blue",future:"cyan",referral:"teal",ooo:"orange","meeting-ready":"green",NA:"gray",auto:"gray","auto-left-company-new-contact":"gray","auto-left-company-no-contact":"gray"},$e=a=>a?a.split(/[;,\n]/).map(t=>t.trim()).filter(Boolean):[],W=(a,t=!1)=>{const n=$e(a);if(t&&n.length===0)return{isValid:!1,invalidEmails:[],error:"At least one email is required"};const c=n.filter(p=>!Ne(p));return c.length>0?{isValid:!1,invalidEmails:c,error:`${c.length} invalid email(s): ${c.join(", ")}`}:{isValid:!0,invalidEmails:[],error:null}},u=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Ae=a=>{if(!a)return"-";const t=new Date(a);return Number.isNaN(t.getTime())?u(a):u(t.toLocaleDateString())},qe=a=>{const t=String(a||"").trim();return t?/<\/?[a-z][\s\S]*>/i.test(t)?ae.sanitize(t):u(t).replace(/\n/g,"<br>"):'<p style="margin:0;color:#6b7280;">No content</p>'},Ie=a=>a.length?a.map(t=>{const n=t.createdAt||t.date||t.sentAt||"",c=t.subject||"",p=t.message||t.body||t.html||t.content||t.text||"";return`
      <div style="border:1px solid #e5e7eb;border-radius:6px;padding:12px;margin:8px 0;background:#f9fafb;">
        ${c?`<p style="margin:0 0 8px 0;font-weight:600;color:#374151;"><strong>Subject:</strong> ${u(c)}</p>`:""}
        <p style="margin:0 0 8px 0;font-size:12px;color:#6b7280;"><strong>Date:</strong> ${Ae(n)}</p>
        <div style="margin-top:8px;font-size:14px;line-height:1.6;color:#111827;">
          ${qe(p)}
        </div>
      </div>
    `}).join(""):`
      <div style="border:1px solid #e5e7eb;border-radius:6px;padding:12px;margin:8px 0;background:#f9fafb;">
        <p style="margin:0;color:#6b7280;font-size:14px;">No conversation available.</p>
      </div>
    `,Z=a=>`
  <p>Good luck! Leadly Team</p>
  <h2>Lead Information</h2>
  <p><strong>Name:</strong> ${u(`${a.leadFirstName||""} ${a.leadLastName||""}`.trim()||"-")}</p>
  <p><strong>Email:</strong> <a href="mailto:${u(a.leadEmail||"")}">${u(a.leadEmail||"-")}</a></p>
  <p><strong>Company:</strong> ${u(a.leadCompanyName||"-")}</p>
  ${a.phone?`<p><strong>Phone:</strong> ${u(a.phone)}</p>`:""}
  <p><strong>Campaign:</strong> ${u(a.campaignName||"-")}</p>
  ${a.sequenceStep?`<p><strong>Step:</strong> ${u(String(a.sequenceStep))}</p>`:""}
  ${a.linkedinUrl?`<p><strong>LinkedIn:</strong> <a href="${u(a.linkedinUrl)}">${u(a.linkedinUrl)}</a></p>`:""}
`,He=a=>`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lead Sheet</title>
  <style>
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    .wrapper {
      max-width: 650px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .header {
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      padding: 20px;
      color: #fff;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .content {
      padding: 24px;
    }
    .content p {
      margin: 0 0 14px;
      line-height: 1.5;
      font-size: 15px;
    }
    .lead-info {
      margin: 25px 0;
      border-top: 1px solid #e5e7eb;
      padding-top: 20px;
    }
    .lead-info h2, .conversation h2 {
      font-size: 18px;
      margin: 0 0 12px;
      color: #111827;
    }
    .lead-info p {
      margin: 8px 0;
      font-size: 14px;
    }
    .conversation {
      margin: 30px 0 10px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #6b7280;
      padding: 20px;
      border-top: 1px solid #f3f4f6;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Meeting Ready Lead</h1>
    </div>
    <div class="content">
      <div class="lead-info">
        ${ae.sanitize(a.leadInfoHtml||"<p>-</p>")}
      </div>
      <div class="conversation">
        <h2>Conversation</h2>
        ${Ie(a.emails)}
      </div>
    </div>
    <div class="footer">
      <p>This is an automated email from Leadly.</p>
    </div>
  </div>
</body>
</html>`,Me=({lead:a,onClose:t,onLeadSheetSent:n})=>{const{_id:c,aiCategory:p,campaignId:k,campaignName:x,contactId:b,leadCompanyName:f,leadEmail:j,leadFirstName:g,leadLastName:v,linkedinUrl:S,phone:E,sentToClient:N,sequenceStep:y}=a,[w,$]=s.useState([]),[T,o]=s.useState(!0),[l,m]=s.useState(!1),[z,A]=s.useState("tennebarc@btlnet.com"),[C,P]=s.useState("chris@leadlypro.io"),[ne,B]=s.useState(!1),[oe,F]=s.useState(!!N),[q,R]=s.useState(()=>Z({campaignName:x,leadCompanyName:f,leadEmail:j,leadFirstName:g,leadLastName:v,linkedinUrl:S,phone:E||void 0,sequenceStep:y||void 0})),L=fe({extensions:[ye,be,je],content:q||"<p>-</p>",onUpdate:({editor:r})=>{const h=r.getHTML();h!==q&&R(h)}}),O=s.useMemo(()=>He({emails:w,leadInfoHtml:q}),[w,q]);s.useEffect(()=>{o(!0),$([]);let r=!1;return D.request(`api/lemlist/thread?contactId=${b}&campaignId=${k}`,{method:"GET"}).then(h=>{if(r)return;const i=h==null?void 0:h.data,V=Array.isArray(i)?i:Array.isArray(i==null?void 0:i.thread)?i.thread:Array.isArray(i==null?void 0:i.emails)?i.emails:Array.isArray(i==null?void 0:i.messages)?i.messages:[];$([...V].reverse())}).catch(h=>{console.error("Error fetching lemlist thread:",h)}).finally(()=>{r||o(!1)}),()=>{r=!0}},[b,k]),s.useEffect(()=>{F(!!N)},[N]),s.useEffect(()=>{A("tennebarc@btlnet.com"),P("chris@leadlypro.io"),R(Z({campaignName:x,leadCompanyName:f,leadEmail:j,leadFirstName:g,leadLastName:v,linkedinUrl:S,phone:E||void 0,sequenceStep:y||void 0}))},[x,f,j,g,v,S,E,y]),s.useEffect(()=>{L&&L.getHTML()!==q&&L.commands.setContent(q||"<p>-</p>")},[L,q]),s.useEffect(()=>()=>{try{L==null||L.destroy()}catch{}},[L]);const ie=ze[p]||"gray",le=p==="NA"?"Not Categorized":(p||"").replace(/-/g," ").toUpperCase(),de=`${g||""} ${v||""}`.trim()||j,M=W(z,!0),_=W(C),ce=async()=>{const r=z.trim(),h=C.trim();if(!r){I.show({title:"Validation Error",message:"Please enter at least one recipient in To.",color:"red"});return}if(!M.isValid){I.show({title:"Validation Error",message:M.error||"Please enter valid To email addresses.",color:"red"});return}if(h&&!_.isValid){I.show({title:"Validation Error",message:_.error||"Please enter valid CC email addresses.",color:"red"});return}try{B(!0);const i=await D.request("api/lemlist/send/email-to-client",{method:"POST",body:JSON.stringify({lemlistUserId:c,to:r,cc:h,htmlBody:O})});I.show({title:"Lead Sheet Sent",message:i.message||"Lead sheet sent successfully.",color:"green"}),F(!0),n==null||n(c),m(!1)}catch(i){I.show({title:"Send Failed",message:(i==null?void 0:i.message)||"Failed to send lead sheet.",color:"red"})}finally{B(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(we,{opened:l,onClose:()=>m(!1),title:"Lead Sheet",size:"90%",centered:!0,children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 xl:grid-cols-[360px_minmax(0,1fr)]",children:[e.jsxs(pe,{gap:"md",children:[e.jsx(Q,{label:"To",placeholder:"client@example.com, owner@example.com",value:z,onChange:r=>A(r.currentTarget.value),error:z?M.error:void 0}),e.jsx(Q,{label:"CC",placeholder:"team@example.com, manager@example.com",value:C,onChange:r=>P(r.currentTarget.value),error:C?_.error:void 0}),e.jsxs("div",{className:"rounded-md border border-gray-200 bg-gray-50 p-3",children:[e.jsx(U,{size:"sm",fw:600,mb:10,children:"Lead Information"}),e.jsx(U,{size:"xs",c:"dimmed",mb:10,children:"Edit only this section. The email design and conversation preview stay fixed."}),e.jsxs(d,{editor:L,children:[e.jsxs(d.Toolbar,{children:[e.jsxs(d.ControlsGroup,{children:[e.jsx(d.Bold,{}),e.jsx(d.Italic,{}),e.jsx(d.Underline,{}),e.jsx(d.Strikethrough,{})]}),e.jsxs(d.ControlsGroup,{children:[e.jsx(d.H2,{}),e.jsx(d.H3,{})]}),e.jsxs(d.ControlsGroup,{children:[e.jsx(d.BulletList,{}),e.jsx(d.OrderedList,{})]}),e.jsxs(d.ControlsGroup,{children:[e.jsx(d.Link,{}),e.jsx(d.Unlink,{})]}),e.jsx(d.ControlsGroup,{children:e.jsx(d.ClearFormatting,{})})]}),e.jsx(d.Content,{style:{minHeight:360}})]})]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx(H,{onClick:ce,loading:ne,disabled:!M.isValid||C.trim().length>0&&!_.isValid,children:"Send Lead Sheet"}),e.jsx(H,{variant:"default",onClick:()=>m(!1),children:"Close"})]})]}),e.jsxs("div",{className:"min-h-[720px] overflow-hidden rounded-md border border-gray-200 bg-white",children:[e.jsx("div",{className:"border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-700",children:"Preview"}),e.jsx("iframe",{title:"Lead sheet preview",srcDoc:O,className:"h-[720px] w-full border-0"})]})]})}),e.jsxs("div",{className:"h-full flex flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b bg-gray-50 shrink-0",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-semibold text-sm truncate",children:de}),e.jsx("div",{className:"text-xs text-gray-500 truncate",children:j})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-3 shrink-0",children:[p&&e.jsx(se,{color:ie,size:"xs",children:le}),oe?e.jsx(ee,{label:"Lead Sheet Sent",position:"top",withArrow:!0,children:e.jsx(me,{variant:"subtle",size:"md",onClick:()=>m(!0),className:"!bg-green-400 !rounded-full","aria-label":"Lead Sheet Sent",children:e.jsx(re,{size:16,color:"white"})})}):e.jsx(H,{size:"xs",variant:"light",leftSection:e.jsx(ve,{size:14}),onClick:()=>m(!0),children:"Send Lead Sheet"}),e.jsx(H,{size:"xs",variant:"subtle",onClick:t,"aria-label":"Close",children:e.jsx(te,{size:14})})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-1 px-4 py-2 border-b text-xs text-gray-600 shrink-0",children:[f&&e.jsxs("span",{children:[e.jsx("span",{className:"font-medium",children:"Company:"})," ",f]}),x&&e.jsxs("span",{children:[e.jsx("span",{className:"font-medium",children:"Campaign:"})," ",x]}),e.jsxs("span",{children:[e.jsx("span",{className:"font-medium",children:"Step:"})," ",y]}),S&&e.jsx("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:"LinkedIn"})]}),e.jsx(Ce,{className:"flex-1 min-h-0",type:"auto",children:e.jsxs("div",{className:"px-4 py-3 space-y-4",children:[T&&e.jsx("div",{className:"flex justify-center py-8",children:e.jsx(xe,{size:"sm"})}),!T&&w.length===0&&e.jsx("div",{className:"text-center text-xs text-gray-400 py-8",children:"No emails found in this thread."}),!T&&w.map((r,h)=>{const i=r._id||r.messageId||r.id||h,V=r.type==="emailsReplied",G=V?r.fromEmail||r.leadEmail||"":`${r.sendUserName||""} <${r.sendUserEmail||""}>`.trim(),X=r.leadEmail||"",J=r.createdAt||r.date||r.sentAt||"",K=r.subject||"",Y=r.message||r.body||r.html||r.content||r.text||"";return e.jsxs("div",{className:`rounded-lg border overflow-hidden ${V?"border-blue-100 bg-blue-50/30":"border-gray-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between px-3 py-2 border-b border-inherit bg-white/60",children:[e.jsxs("div",{className:"text-xs space-y-0.5 min-w-0",children:[G&&e.jsxs("div",{className:"truncate",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"From:"})," ",e.jsx("span",{className:"text-gray-600",children:G})]}),X&&e.jsxs("div",{className:"truncate",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"To:"})," ",e.jsx("span",{className:"text-gray-600",children:X})]}),K&&e.jsxs("div",{className:"truncate",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"Subject:"})," ",e.jsx("span",{className:"text-gray-600",children:K})]})]}),e.jsx("div",{className:"text-xs text-gray-400 ml-3 shrink-0",children:J?new Date(J).toLocaleString():""})]}),e.jsx("div",{className:"p-3",children:Y?e.jsx(Se,{emailBody:Y}):e.jsx(U,{size:"xs",c:"dimmed",fs:"italic",children:"No content"})})]},i)})]})})]})]})};function _e(a){if(!a)return"";const t=document.createElement("div");return t.innerHTML=a,t.querySelectorAll("style, script").forEach(n=>n.remove()),t.querySelectorAll("p, div, br, hr, li, tr, blockquote").forEach(n=>{n.prepend(document.createTextNode(`
`))}),(t.textContent||t.innerText||"").replace(/\n{3,}/g,`

`).trim()}const Ve={"do-not-contact":"red","not-interested":"red",complaint:"red",bounce:"red","security-blocked":"red","ticket-or-ack":"yellow","positive-not-qualified-wrong-geo":"orange","positive-not-qualified-wrong-industry":"orange","positive-not-qualified-wrong-company-type":"orange","positive-not-qualified-wrong-size":"orange","positive-not-qualified-wrong-scope":"orange","positive-not-qualified-already-solved":"orange","positive-not-qualified-not-a-buyer":"orange",power:"purple",information:"yellow",pricing:"blue",future:"cyan",referral:"teal",ooo:"orange","meeting-ready":"green",NA:"gray",auto:"gray","auto-left-company-new-contact":"gray","auto-left-company-no-contact":"gray"};function Ue({category:a}){if(!a)return e.jsx("span",{children:"-"});const t=Ve[a]||"gray",n=a==="NA"?"Not Categorized":a.replace(/-/g," ").toUpperCase();return e.jsx(se,{color:t,size:"xs",children:n})}const De=[{key:"name",label:"Name",width:"180px",render:(a,t)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"font-semibold",children:`${t.leadFirstName||""} ${t.leadLastName||""}`.trim()||"-"}),t.sentToClient&&e.jsx(ee,{label:"Lead Sheet Sent",position:"top",withArrow:!0,children:e.jsx("div",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white",children:e.jsx(re,{size:12})})})]})},{key:"leadEmail",label:"Email",width:"220px",render:(a,t)=>t.leadEmail||"-"},{key:"leadCompanyName",label:"Company",width:"160px",render:(a,t)=>t.leadCompanyName||"-"},{key:"phone",label:"Phone",width:"140px",render:(a,t)=>t.phone||"-"},{key:"campaignName",label:"Campaign",width:"180px",render:(a,t)=>t.campaignName||"-"},{key:"sequenceStep",label:"Step",width:"70px",render:(a,t)=>String(t.sequenceStep??"-")},{key:"aiCategory",label:"Category",width:"180px",render:(a,t)=>e.jsx(Ue,{category:t.aiCategory})},{key:"lastActivity",label:"Last Activity",width:"150px",render:(a,t)=>t.updatedAt||t.createdAt?new Date(t.updatedAt||t.createdAt).toLocaleString():"-"},{key:"lastMessage",label:"Last Message",width:"300px",render:(a,t)=>{const n=_e(t.lastMessage||"").replace(/\n/g," ");return e.jsx("div",{className:"max-w-[360px] truncate text-gray-600",title:n,children:n||"-"})}}];function pt(){const{leads:a,loading:t,loadingMore:n,hasMore:c,total:p,setSearch:k,fetchNext:x}=Te(),[b,f]=s.useState(null),[j,g]=s.useState(!1),[v,S]=s.useState({}),E=s.useRef(0),N=s.useMemo(()=>he(o=>k(o),400),[k]),y=s.useCallback(o=>{const l=Date.now();if(l-E.current<300)return;E.current=l;const m=o.currentTarget;if(!m||!c||n)return;const{scrollTop:z,scrollHeight:A,clientHeight:C}=m;z+C>=A*.9&&x()},[c,n,x]),w=s.useCallback(o=>{f(o),g(!0)},[]),$=s.useCallback(o=>{S(l=>({...l,[o]:!0})),f(l=>l&&l._id===o?{...l,sentToClient:!0}:l)},[]),T=s.useMemo(()=>De.map(o=>({key:o.key,label:o.label,width:o.width,render:(l,m)=>e.jsx("div",{onClick:()=>w(m),className:"cursor-pointer text-sm",children:o.render(l,v[m._id]?{...m,sentToClient:!0}:m)})})),[w,v]);return e.jsxs("div",{className:"w-full h-full flex flex-col",children:[e.jsx("div",{className:"flex items-center gap-2 p-4",children:e.jsx("div",{className:"w-[320px]",children:e.jsx(Le,{size:"xs",placeholder:"Search leads...",leftSection:e.jsx(ue,{size:14}),onChange:o=>N(o.target.value),"aria-label":"Search leads"})})}),e.jsxs("div",{className:"h-[calc(100vh-88px)]",children:[e.jsx(ge,{columns:T,data:a,bordered:!0,loading:t,compact:!0,showMobileCards:!1,onScroll:y,selectedRowId:(b==null?void 0:b._id)??null}),n&&e.jsx("div",{className:"p-4 flex justify-center",children:e.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[e.jsx(ke,{height:20,width:20,radius:"xl"}),p>0?e.jsxs("span",{children:["Loading more leads... (",a.length," of ",p,")"]}):e.jsx("span",{children:"Loading more leads..."})]})}),!c&&a.length>0&&e.jsx("div",{className:"p-4 text-center text-xs text-gray-400",children:p>0?e.jsxs(e.Fragment,{children:["Showing all ",p," lead",p!==1?"s":""]}):e.jsx(e.Fragment,{children:"No more leads to load"})})]}),e.jsx(Ee,{position:"right",opened:j,onClose:()=>g(!1),size:"50%",padding:"0",closeOnClickOutside:!1,trapFocus:!1,lockScroll:!1,withCloseButton:!1,styles:{content:{height:"100%"},body:{height:"100%",display:"flex",flexDirection:"column",padding:0}},overlayProps:{style:{pointerEvents:"none",backgroundColor:"transparent"}},children:b&&e.jsx(Me,{lead:b,onClose:()=>g(!1),onLeadSheetSent:$})}),j&&e.jsx("div",{className:"fixed left-[47%] top-[18px] z-[9999]",children:e.jsx(H,{size:"xs",variant:"outline",onClick:()=>g(!1),"aria-label":"Close thread",className:"rounded-xl p-1 shadow",children:e.jsx(te,{size:14})})})]})}export{pt as LemlistInbox};
