(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8389],{98389:(e,t,o)=>{"use strict";o.r(t),o.d(t,{commandEditItem:()=>R,default:()=>D,exportPlugin:()=>B,notebookTrustItem:()=>L});var n=o(88647),l=o(19573),a=o(95153),r=o(64662),s=o(87939),c=o(70381),d=o(80498),i=o(66677),u=o(94257),b=o(80198),m=o(69438),p=o(85),k=o(44588),C=o(49713),g=o(34016),A=o(17179),x=o(10189),_=o(79028),w=o(66065),h=o(98669),f=o(91884),v=o(77031),N=o(91401),E=o(86703);const y={activate:function(e,t,o){function n(e){function t(t,n,l){if(E.KernelMessage.isDisplayDataMsg(t)||E.KernelMessage.isStreamMsg(t)||E.KernelMessage.isErrorMsg(t)||E.KernelMessage.isExecuteResultMsg(t)){const a=o.getLogger(e.context.path);a.rendermime=e.content.rendermime;const r=Object.assign(Object.assign({},t.content),{output_type:t.header.msg_type});let s=n;(E.KernelMessage.isErrorMsg(t)||E.KernelMessage.isStreamMsg(t)&&"stderr"===t.content.name)&&(s=l),a.log({type:"output",data:r,level:s})}}e.context.sessionContext.iopubMessage.connect(((e,o)=>t(o,"info","info"))),e.context.sessionContext.unhandledMessage.connect(((e,o)=>t(o,"warning","error")))}o&&(t.forEach((e=>n(e))),t.widgetAdded.connect(((e,t)=>n(t))))},id:"@jupyterlab/notebook-extension:log-output",requires:[b.INotebookTracker],optional:[N.ILoggerRegistry],autoStart:!0};var S;!function(e){e.createNew="notebook:create-new",e.interrupt="notebook:interrupt-kernel",e.restart="notebook:restart-kernel",e.restartClear="notebook:restart-clear-output",e.restartAndRunToSelected="notebook:restart-and-run-to-selected",e.restartRunAll="notebook:restart-run-all",e.reconnectToKernel="notebook:reconnect-to-kernel",e.changeKernel="notebook:change-kernel",e.createConsole="notebook:create-console",e.createOutputView="notebook:create-output-view",e.clearAllOutputs="notebook:clear-all-cell-outputs",e.closeAndShutdown="notebook:close-and-shutdown",e.trust="notebook:trust",e.exportToFormat="notebook:export-to-format",e.run="notebook:run-cell",e.runAndAdvance="notebook:run-cell-and-select-next",e.runAndInsert="notebook:run-cell-and-insert-below",e.runInConsole="notebook:run-in-console",e.runAll="notebook:run-all-cells",e.runAllAbove="notebook:run-all-above",e.runAllBelow="notebook:run-all-below",e.renderAllMarkdown="notebook:render-all-markdown",e.toCode="notebook:change-cell-to-code",e.toMarkdown="notebook:change-cell-to-markdown",e.toRaw="notebook:change-cell-to-raw",e.cut="notebook:cut-cell",e.copy="notebook:copy-cell",e.pasteAbove="notebook:paste-cell-above",e.pasteBelow="notebook:paste-cell-below",e.pasteAndReplace="notebook:paste-and-replace-cell",e.moveUp="notebook:move-cell-up",e.moveDown="notebook:move-cell-down",e.clearOutputs="notebook:clear-cell-output",e.deleteCell="notebook:delete-cell",e.insertAbove="notebook:insert-cell-above",e.insertBelow="notebook:insert-cell-below",e.selectAbove="notebook:move-cursor-up",e.selectBelow="notebook:move-cursor-down",e.extendAbove="notebook:extend-marked-cells-above",e.extendTop="notebook:extend-marked-cells-top",e.extendBelow="notebook:extend-marked-cells-below",e.extendBottom="notebook:extend-marked-cells-bottom",e.selectAll="notebook:select-all",e.deselectAll="notebook:deselect-all",e.editMode="notebook:enter-edit-mode",e.merge="notebook:merge-cells",e.mergeAbove="notebook:merge-cell-above",e.mergeBelow="notebook:merge-cell-below",e.split="notebook:split-cell-at-cursor",e.commandMode="notebook:enter-command-mode",e.toggleAllLines="notebook:toggle-all-cell-line-numbers",e.undoCellAction="notebook:undo-cell-action",e.redoCellAction="notebook:redo-cell-action",e.markdown1="notebook:change-cell-to-heading-1",e.markdown2="notebook:change-cell-to-heading-2",e.markdown3="notebook:change-cell-to-heading-3",e.markdown4="notebook:change-cell-to-heading-4",e.markdown5="notebook:change-cell-to-heading-5",e.markdown6="notebook:change-cell-to-heading-6",e.hideCode="notebook:hide-cell-code",e.showCode="notebook:show-cell-code",e.hideAllCode="notebook:hide-all-cell-code",e.showAllCode="notebook:show-all-cell-code",e.hideOutput="notebook:hide-cell-outputs",e.showOutput="notebook:show-cell-outputs",e.hideAllOutputs="notebook:hide-all-cell-outputs",e.showAllOutputs="notebook:show-all-cell-outputs",e.enableOutputScrolling="notebook:enable-output-scrolling",e.disableOutputScrolling="notebook:disable-output-scrolling",e.selectLastRunCell="notebook:select-last-run-cell",e.replaceSelection="notebook:replace-selection",e.toggleCollapseCmd="Collapsible_Headings:Toggle_Collapse",e.collapseAllCmd="Collapsible_Headings:Collapse_All",e.expandAllCmd="Collapsible_Headings:Expand_All"}(S||(S={}));const M="Notebook",I=["notebook","python","custom"],O={id:"@jupyterlab/notebook-extension:tracker",provides:b.INotebookTracker,requires:[b.INotebookWidgetFactory,A.ITranslator],optional:[l.ICommandPalette,d.IFileBrowserFactory,i.ILauncher,n.ILayoutRestorer,u.IMainMenu,k.ISettingRegistry,l.ISessionContextDialogs],activate:function(e,t,o,n,r,c,d,i,u,m){const p=o.load("jupyterlab"),k=e.serviceManager,{commands:C}=e,g=new b.NotebookTracker({namespace:"notebook"});d&&d.restore(g,{command:"docmanager:open",args:e=>({path:e.context.path,factory:M}),name:e=>e.context.path,when:k.ready}),e.docRegistry.addModelFactory(new b.NotebookModelFactory({})),function(e,t,o,n){const r=o.load("jupyterlab"),{commands:s,shell:c}=e;n=null!=n?n:l.sessionContextDialogs;const d=()=>H.isEnabled(c,t),i=()=>H.isEnabledAndSingleSelected(c,t);t.currentChanged.connect(((e,t)=>{var o;null===(o=t.content.model)||void 0===o||o.cells.changed.connect(((e,o)=>{const n=t.content.widgets[o.newIndex];n instanceof a.MarkdownCell&&("add"===o.type||"set"===o.type)&&n.toggleCollapsedSignal.connect(((e,o)=>{b.NotebookActions.setHeadingCollapse(e,o,t.content)})),(e=>{for(const t of e.widgets)t instanceof a.MarkdownCell&&t.headingCollapsed&&(b.NotebookActions.setHeadingCollapse(t,!0,e),b.NotebookActions.expandParent(t,e))})(t.content)})),t.content.activeCellChanged.connect(((e,t)=>{b.NotebookActions.expandParent(t,e)}))})),s.addCommand(S.runAndAdvance,{label:r.__("Run Selected Cells"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAndAdvance(t,e.sessionContext)}},isEnabled:d}),s.addCommand(S.run,{label:r.__("Run Selected Cells and Don't Advance"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.run(t,e.sessionContext)}},isEnabled:d}),s.addCommand(S.runAndInsert,{label:r.__("Run Selected Cells and Insert Below"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAndInsert(t,e.sessionContext)}},isEnabled:d}),s.addCommand(S.runAll,{label:r.__("Run All Cells"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAll(t,e.sessionContext)}},isEnabled:d}),s.addCommand(S.runAllAbove,{label:r.__("Run All Above Selected Cell"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAllAbove(t,e.sessionContext)}},isEnabled:()=>i()&&0!==t.currentWidget.content.activeCellIndex}),s.addCommand(S.runAllBelow,{label:r.__("Run Selected Cell and All Below"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAllBelow(t,e.sessionContext)}},isEnabled:()=>i()&&t.currentWidget.content.activeCellIndex!==t.currentWidget.content.widgets.length-1}),s.addCommand(S.renderAllMarkdown,{label:r.__("Render All Markdown Cells"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.renderAllMarkdown(t,e.sessionContext)}},isEnabled:d}),s.addCommand(S.restart,{label:r.__("Restart Kernel…"),execute:e=>{const l=W(t,c,e);if(l)return n.restart(l.sessionContext,o)},isEnabled:d}),s.addCommand(S.closeAndShutdown,{label:r.__("Close and Shut Down"),execute:e=>{const o=W(t,c,e);if(!o)return;const n=o.title.label;return(0,l.showDialog)({title:r.__("Shut down the notebook?"),body:r.__('Are you sure you want to close "%1"?',n),buttons:[l.Dialog.cancelButton(),l.Dialog.warnButton()]}).then((e=>{if(e.button.accept)return o.context.sessionContext.shutdown().then((()=>{o.dispose()}))}))},isEnabled:d}),s.addCommand(S.trust,{label:()=>r.__("Trust Notebook"),execute:e=>{const o=W(t,c,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.trust(t).then((()=>e.save()))}},isEnabled:d}),s.addCommand(S.restartClear,{label:r.__("Restart Kernel and Clear All Outputs…"),execute:e=>{const l=W(t,c,e);if(l){const{content:e,sessionContext:t}=l;return n.restart(t,o).then((()=>{b.NotebookActions.clearAllOutputs(e)}))}},isEnabled:d}),s.addCommand(S.restartAndRunToSelected,{label:r.__("Restart Kernel and Run up to Selected Cell…"),execute:e=>{const l=W(t,c,e);if(l){const{context:e,content:t}=l;return n.restart(l.sessionContext,o).then((o=>{o&&b.NotebookActions.runAllAbove(t,e.sessionContext).then((o=>{(o||0===t.activeCellIndex)&&b.NotebookActions.run(t,e.sessionContext)}))}))}},isEnabled:i}),s.addCommand(S.restartRunAll,{label:r.__("Restart Kernel and Run All Cells…"),execute:e=>{const l=W(t,c,e);if(l){const{context:e,content:t,sessionContext:a}=l;return n.restart(a,o).then((o=>(o&&b.NotebookActions.runAll(t,e.sessionContext),o)))}},isEnabled:d}),s.addCommand(S.clearAllOutputs,{label:r.__("Clear All Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.clearAllOutputs(o.content)},isEnabled:d}),s.addCommand(S.clearOutputs,{label:r.__("Clear Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.clearOutputs(o.content)},isEnabled:d}),s.addCommand(S.interrupt,{label:r.__("Interrupt Kernel"),execute:e=>{var o;const n=W(t,c,e);if(!n)return;const l=null===(o=n.context.sessionContext.session)||void 0===o?void 0:o.kernel;return l?l.interrupt():void 0},isEnabled:d}),s.addCommand(S.toCode,{label:r.__("Change to Code Cell Type"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.changeCellType(o.content,"code")},isEnabled:d}),s.addCommand(S.toMarkdown,{label:r.__("Change to Markdown Cell Type"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.changeCellType(o.content,"markdown")},isEnabled:d}),s.addCommand(S.toRaw,{label:r.__("Change to Raw Cell Type"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.changeCellType(o.content,"raw")},isEnabled:d}),s.addCommand(S.cut,{label:r.__("Cut Cells"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.cut(o.content)},isEnabled:d}),s.addCommand(S.copy,{label:r.__("Copy Cells"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.copy(o.content)},isEnabled:d}),s.addCommand(S.pasteBelow,{label:r.__("Paste Cells Below"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.paste(o.content,"below")},isEnabled:d}),s.addCommand(S.pasteAbove,{label:r.__("Paste Cells Above"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.paste(o.content,"above")},isEnabled:d}),s.addCommand(S.pasteAndReplace,{label:r.__("Paste Cells and Replace"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.paste(o.content,"replace")},isEnabled:d}),s.addCommand(S.deleteCell,{label:r.__("Delete Cells"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.deleteCells(o.content)},isEnabled:d}),s.addCommand(S.split,{label:r.__("Split Cell"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.splitCell(o.content)},isEnabled:d}),s.addCommand(S.merge,{label:r.__("Merge Selected Cells"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.mergeCells(o.content)},isEnabled:d}),s.addCommand(S.mergeAbove,{label:r.__("Merge Cell Above"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.mergeCells(o.content,!0)},isEnabled:d}),s.addCommand(S.mergeBelow,{label:r.__("Merge Cell Below"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.mergeCells(o.content,!1)},isEnabled:d}),s.addCommand(S.insertAbove,{label:r.__("Insert Cell Above"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.insertAbove(o.content)},isEnabled:d}),s.addCommand(S.insertBelow,{label:r.__("Insert Cell Below"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.insertBelow(o.content)},isEnabled:d}),s.addCommand(S.selectAbove,{label:r.__("Select Cell Above"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.selectAbove(o.content)},isEnabled:d}),s.addCommand(S.selectBelow,{label:r.__("Select Cell Below"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.selectBelow(o.content)},isEnabled:d}),s.addCommand(S.extendAbove,{label:r.__("Extend Selection Above"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.extendSelectionAbove(o.content)},isEnabled:d}),s.addCommand(S.extendTop,{label:r.__("Extend Selection to Top"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.extendSelectionAbove(o.content,!0)},isEnabled:d}),s.addCommand(S.extendBelow,{label:r.__("Extend Selection Below"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.extendSelectionBelow(o.content)},isEnabled:d}),s.addCommand(S.extendBottom,{label:r.__("Extend Selection to Bottom"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.extendSelectionBelow(o.content,!0)},isEnabled:d}),s.addCommand(S.selectAll,{label:r.__("Select All Cells"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.selectAll(o.content)},isEnabled:d}),s.addCommand(S.deselectAll,{label:r.__("Deselect All Cells"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.deselectAll(o.content)},isEnabled:d}),s.addCommand(S.moveUp,{label:r.__("Move Cells Up"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.moveUp(o.content)},isEnabled:d}),s.addCommand(S.moveDown,{label:r.__("Move Cells Down"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.moveDown(o.content)},isEnabled:d}),s.addCommand(S.toggleAllLines,{label:r.__("Toggle All Line Numbers"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.toggleAllLineNumbers(o.content)},isEnabled:d}),s.addCommand(S.commandMode,{label:r.__("Enter Command Mode"),execute:e=>{const o=W(t,c,e);o&&(o.content.mode="command")},isEnabled:d}),s.addCommand(S.editMode,{label:r.__("Enter Edit Mode"),execute:e=>{const o=W(t,c,e);o&&(o.content.mode="edit")},isEnabled:d}),s.addCommand(S.undoCellAction,{label:r.__("Undo Cell Operation"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.undo(o.content)},isEnabled:d}),s.addCommand(S.redoCellAction,{label:r.__("Redo Cell Operation"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.redo(o.content)},isEnabled:d}),s.addCommand(S.changeKernel,{label:r.__("Change Kernel…"),execute:e=>{const l=W(t,c,e);if(l)return n.selectKernel(l.context.sessionContext,o)},isEnabled:d}),s.addCommand(S.reconnectToKernel,{label:r.__("Reconnect To Kernel"),execute:e=>{var o;const n=W(t,c,e);if(!n)return;const l=null===(o=n.context.sessionContext.session)||void 0===o?void 0:o.kernel;return l?l.reconnect():void 0},isEnabled:d}),s.addCommand(S.markdown1,{label:r.__("Change to Heading 1"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,1)},isEnabled:d}),s.addCommand(S.markdown2,{label:r.__("Change to Heading 2"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,2)},isEnabled:d}),s.addCommand(S.markdown3,{label:r.__("Change to Heading 3"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,3)},isEnabled:d}),s.addCommand(S.markdown4,{label:r.__("Change to Heading 4"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,4)},isEnabled:d}),s.addCommand(S.markdown5,{label:r.__("Change to Heading 5"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,5)},isEnabled:d}),s.addCommand(S.markdown6,{label:r.__("Change to Heading 6"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,6)},isEnabled:d}),s.addCommand(S.hideCode,{label:r.__("Collapse Selected Code"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.hideCode(o.content)},isEnabled:d}),s.addCommand(S.showCode,{label:r.__("Expand Selected Code"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.showCode(o.content)},isEnabled:d}),s.addCommand(S.hideAllCode,{label:r.__("Collapse All Code"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.hideAllCode(o.content)},isEnabled:d}),s.addCommand(S.showAllCode,{label:r.__("Expand All Code"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.showAllCode(o.content)},isEnabled:d}),s.addCommand(S.hideOutput,{label:r.__("Collapse Selected Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.hideOutput(o.content)},isEnabled:d}),s.addCommand(S.showOutput,{label:r.__("Expand Selected Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.showOutput(o.content)},isEnabled:d}),s.addCommand(S.hideAllOutputs,{label:r.__("Collapse All Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.hideAllOutputs(o.content)},isEnabled:d}),s.addCommand(S.showAllOutputs,{label:r.__("Expand All Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.showAllOutputs(o.content)},isEnabled:d}),s.addCommand(S.enableOutputScrolling,{label:r.__("Enable Scrolling for Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.enableOutputScrolling(o.content)},isEnabled:d}),s.addCommand(S.disableOutputScrolling,{label:r.__("Disable Scrolling for Outputs"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.disableOutputScrolling(o.content)},isEnabled:d}),s.addCommand(S.selectLastRunCell,{label:r.__("Select current running or last run cell"),execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.selectLastRunCell(o.content)},isEnabled:d}),s.addCommand(S.replaceSelection,{label:r.__("Replace Selection in Notebook Cell"),execute:e=>{const o=W(t,c,e),n=e.text||"";if(o)return b.NotebookActions.replaceSelection(o.content,n)},isEnabled:d}),s.addCommand(S.toggleCollapseCmd,{label:"Toggle Collapse Notebook Heading",execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.toggleCurrentHeadingCollapse(o.content)},isEnabled:()=>H.isEnabledAndHeadingSelected(c,t)}),s.addCommand(S.collapseAllCmd,{label:"Collapse All Cells",execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.collapseAll(o.content)}}),s.addCommand(S.expandAllCmd,{label:"Expand All Headings",execute:e=>{const o=W(t,c,e);if(o)return b.NotebookActions.expandAllHeadings(o.content)}})}(e,g,o,m),n&&function(e,t){const o=t.load("jupyterlab");let n=o.__("Notebook Operations");[S.interrupt,S.restart,S.restartClear,S.restartRunAll,S.runAll,S.renderAllMarkdown,S.runAllAbove,S.runAllBelow,S.restartAndRunToSelected,S.selectAll,S.deselectAll,S.clearAllOutputs,S.toggleAllLines,S.editMode,S.commandMode,S.changeKernel,S.reconnectToKernel,S.createConsole,S.closeAndShutdown,S.trust,S.toggleCollapseCmd,S.collapseAllCmd,S.expandAllCmd].forEach((t=>{e.addItem({command:t,category:n})})),e.addItem({command:S.createNew,category:n,args:{isPalette:!0}}),n=o.__("Notebook Cell Operations"),[S.run,S.runAndAdvance,S.runAndInsert,S.runInConsole,S.clearOutputs,S.toCode,S.toMarkdown,S.toRaw,S.cut,S.copy,S.pasteBelow,S.pasteAbove,S.pasteAndReplace,S.deleteCell,S.split,S.merge,S.mergeAbove,S.mergeBelow,S.insertAbove,S.insertBelow,S.selectAbove,S.selectBelow,S.extendAbove,S.extendTop,S.extendBelow,S.extendBottom,S.moveDown,S.moveUp,S.undoCellAction,S.redoCellAction,S.markdown1,S.markdown2,S.markdown3,S.markdown4,S.markdown5,S.markdown6,S.hideCode,S.showCode,S.hideAllCode,S.showAllCode,S.hideOutput,S.showOutput,S.hideAllOutputs,S.showAllOutputs,S.enableOutputScrolling,S.disableOutputScrolling].forEach((t=>{e.addItem({command:t,category:n})}))}(n,o);let A=0;const _=e.docRegistry.getFileType("notebook");function f(e){g.forEach((t=>{t.setConfig(e)}))}function v(e){const o=Object.assign(Object.assign({},b.StaticNotebook.defaultEditorConfig.code),e.get("codeCellConfig").composite),n=Object.assign(Object.assign({},b.StaticNotebook.defaultEditorConfig.markdown),e.get("markdownCellConfig").composite),l=Object.assign(Object.assign({},b.StaticNotebook.defaultEditorConfig.raw),e.get("rawCellConfig").composite);t.editorConfig={code:o,markdown:n,raw:l},t.notebookConfig={scrollPastEnd:e.get("scrollPastEnd").composite,defaultCell:e.get("defaultCell").composite,recordTiming:e.get("recordTiming").composite,maxNumberOutputs:e.get("maxNumberOutputs").composite},t.shutdownOnClose=e.get("kernelShutdown").composite,f({editorConfig:t.editorConfig,notebookConfig:t.notebookConfig,kernelShutdown:t.shutdownOnClose})}t.widgetCreated.connect(((e,t)=>{var o,n;t.id=t.id||"notebook-"+ ++A,t.title.icon=null==_?void 0:_.icon,t.title.iconClass=null!==(o=null==_?void 0:_.iconClass)&&void 0!==o?o:"",t.title.iconLabel=null!==(n=null==_?void 0:_.iconLabel)&&void 0!==n?n:"",t.context.pathChanged.connect((()=>{g.save(t)})),g.add(t)}));const N=u?u.load(O.id):Promise.reject(new Error(`No setting registry for ${O.id}`));return e.restored.then((()=>N)).then((e=>{v(e),e.changed.connect((()=>{v(e)}))})).catch((e=>{console.warn(e.message),f({editorConfig:t.editorConfig,notebookConfig:t.notebookConfig,kernelShutdown:t.shutdownOnClose})})),i&&function(e,t,o,n,a){const r=n.load("jupyterlab"),{commands:s}=e;a=a||l.sessionContextDialogs,t.editMenu.undoers.add({tracker:o,undo:e=>{var t;null===(t=e.content.activeCell)||void 0===t||t.editor.undo()},redo:e=>{var t;null===(t=e.content.activeCell)||void 0===t||t.editor.redo()}}),t.editMenu.clearers.add({tracker:o,clearCurrentLabel:e=>r.__("Clear Output"),clearAllLabel:e=>r.__("Clear All Outputs"),clearCurrent:e=>b.NotebookActions.clearOutputs(e.content),clearAll:e=>b.NotebookActions.clearAllOutputs(e.content)}),t.fileMenu.newMenu.addGroup([{command:S.createNew}],10),t.fileMenu.closeAndCleaners.add({tracker:o,closeAndCleanupLabel:e=>r.__("Close and Shutdown Notebook"),closeAndCleanup:e=>{const t=e.title.label;return(0,l.showDialog)({title:r.__("Shut down the Notebook?"),body:r.__('Are you sure you want to close "%1"?',t),buttons:[l.Dialog.cancelButton(),l.Dialog.warnButton()]}).then((t=>{if(t.button.accept)return e.context.sessionContext.shutdown().then((()=>{e.dispose()}))}))}}),t.kernelMenu.kernelUsers.add({tracker:o,interruptKernel:e=>{var t;const o=null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel;return o?o.interrupt():Promise.resolve(void 0)},reconnectToKernel:e=>{var t;const o=null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel;return o?o.reconnect():Promise.resolve(void 0)},restartKernelAndClearLabel:e=>r.__("Restart Kernel and Clear All Outputs…"),restartKernel:e=>a.restart(e.sessionContext,n),restartKernelAndClear:e=>a.restart(e.sessionContext,n).then((t=>(t&&b.NotebookActions.clearAllOutputs(e.content),t))),changeKernel:e=>a.selectKernel(e.sessionContext,n),shutdownKernel:e=>e.sessionContext.shutdown()}),t.fileMenu.consoleCreators.add({tracker:o,createConsoleLabel:e=>r.__("New Console for Notebook"),createConsole:e=>H.createConsole(s,e,!0)});const c=[S.hideCode,S.hideOutput,S.hideAllCode,S.hideAllOutputs].map((e=>({command:e})));t.viewMenu.addGroup(c,10);const d=[S.showCode,S.showOutput,S.showAllCode,S.showAllOutputs].map((e=>({command:e})));t.viewMenu.addGroup(d,11),t.viewMenu.editorViewers.add({tracker:o,toggleLineNumbers:e=>{b.NotebookActions.toggleAllLineNumbers(e.content)},lineNumbersToggled:e=>{const t=e.content.editorConfig;return!!(t.code.lineNumbers&&t.markdown.lineNumbers&&t.raw.lineNumbers)}}),t.runMenu.codeRunners.add({tracker:o,runLabel:e=>r.__("Run Selected Cells"),runAllLabel:e=>r.__("Run All Cells"),restartAndRunAllLabel:e=>r.__("Restart Kernel and Run All Cells…"),run:e=>{const{context:t,content:o}=e;return b.NotebookActions.runAndAdvance(o,t.sessionContext).then((()=>{}))},runAll:e=>{const{context:t,content:o}=e;return b.NotebookActions.runAll(o,t.sessionContext).then((()=>{}))},restartAndRunAll:e=>{const{context:t,content:o}=e;return a.restart(t.sessionContext,n).then((e=>(e&&b.NotebookActions.runAll(o,t.sessionContext),e)))}});const i=[S.renderAllMarkdown].map((e=>({command:e}))),u=[S.runAndInsert,S.run,S.runInConsole].map((e=>({command:e}))),m=[S.runAllAbove,S.runAllBelow].map((e=>({command:e}))),p=[S.undoCellAction,S.redoCellAction].map((e=>({command:e}))),k=[S.cut,S.copy,S.pasteBelow,S.pasteAbove,S.pasteAndReplace].map((e=>({command:e}))),C=[S.selectAll,S.deselectAll].map((e=>({command:e}))),g=[S.split,S.merge,S.mergeAbove,S.mergeBelow].map((e=>({command:e}))),A=[S.moveUp,S.moveDown].map((e=>({command:e})));t.editMenu.addGroup(p,4),t.editMenu.addGroup(k,5),t.editMenu.addGroup([{command:S.deleteCell}],6),t.editMenu.addGroup(C,7),t.editMenu.addGroup(A,8),t.editMenu.addGroup(g,9),t.runMenu.addGroup(u,10),t.runMenu.addGroup(m,11),t.runMenu.addGroup(i,12),t.helpMenu.kernelUsers.add({tracker:o,getKernel:e=>{var t;return null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel}})}(e,i,g,o,m),C.addCommand(S.createNew,{label:e=>{var t,o,n;const l=e.kernelName||"";return e.isLauncher&&e.kernelName&&k.kernelspecs?null!==(n=null===(o=null===(t=k.kernelspecs.specs)||void 0===t?void 0:t.kernelspecs[l])||void 0===o?void 0:o.display_name)&&void 0!==n?n:"":e.isPalette?p.__("New Notebook"):p.__("Notebook")},caption:p.__("Create a new notebook"),icon:e=>e.isPalette?void 0:x.notebookIcon,execute:e=>{return t=e.cwd||(r?r.defaultBrowser.model.path:""),o=e.kernelName||"",C.execute("docmanager:new-untitled",{path:t,type:"notebook"}).then((e=>C.execute("docmanager:open",{path:e.path,factory:M,kernel:{name:o}})));var t,o}}),c&&k.ready.then((()=>{let e=null;const t=()=>{e&&(e.dispose(),e=null);const t=k.kernelspecs.specs;if(!t)return;e=new h.DisposableSet;const o=s.PageConfig.getBaseUrl();for(const n in t.kernelspecs){const l=n===t.default?0:1/0,a=t.kernelspecs[n];let r=a.resources["logo-64x64"];if(r){const e=r.indexOf("kernelspecs");r=s.URLExt.join(o,r.slice(e))}e.add(c.add({command:S.createNew,args:{isLauncher:!0,kernelName:n},category:p.__("Notebook"),rank:l,kernelIconUrl:r,metadata:{kernel:w.JSONExt.deepCopy(a.metadata||{})}}))}};t(),k.kernelspecs.specsChanged.connect(t)})),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:0}),e.contextMenu.addItem({command:S.cut,selector:".jp-Notebook .jp-Cell",rank:1}),e.contextMenu.addItem({command:S.copy,selector:".jp-Notebook .jp-Cell",rank:2}),e.contextMenu.addItem({command:S.pasteBelow,selector:".jp-Notebook .jp-Cell",rank:3}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:4}),e.contextMenu.addItem({command:S.deleteCell,selector:".jp-Notebook .jp-Cell",rank:5}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:6}),e.contextMenu.addItem({command:S.split,selector:".jp-Notebook .jp-Cell",rank:7}),e.contextMenu.addItem({command:S.merge,selector:".jp-Notebook .jp-Cell",rank:8}),e.contextMenu.addItem({command:S.mergeAbove,selector:".jp-Notebook .jp-Cell",rank:8}),e.contextMenu.addItem({command:S.mergeBelow,selector:".jp-Notebook .jp-Cell",rank:8}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:9}),e.contextMenu.addItem({command:S.createOutputView,selector:".jp-Notebook .jp-CodeCell",rank:10}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-CodeCell",rank:11}),e.contextMenu.addItem({command:S.clearOutputs,selector:".jp-Notebook .jp-CodeCell",rank:12}),e.contextMenu.addItem({command:S.clearAllOutputs,selector:".jp-Notebook",rank:0}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook",rank:1}),e.contextMenu.addItem({command:S.enableOutputScrolling,selector:".jp-Notebook",rank:2}),e.contextMenu.addItem({command:S.disableOutputScrolling,selector:".jp-Notebook",rank:3}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook",rank:4}),e.contextMenu.addItem({command:S.undoCellAction,selector:".jp-Notebook",rank:5}),e.contextMenu.addItem({command:S.redoCellAction,selector:".jp-Notebook",rank:6}),e.contextMenu.addItem({command:S.restart,selector:".jp-Notebook",rank:7}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook",rank:8}),e.contextMenu.addItem({command:S.createConsole,selector:".jp-Notebook",rank:9}),g},autoStart:!0},j={id:"@jupyterlab/notebook-extension:factory",provides:b.NotebookPanel.IContentFactory,requires:[r.IEditorServices],autoStart:!0,activate:(e,t)=>{const o=t.factoryService.newInlineEditor;return new b.NotebookPanel.ContentFactory({editorFactory:o})}},T={activate:function(e,t,o,n,l,a){const r=l.load("jupyterlab"),s="notebook-tools",c=new b.NotebookTools({tracker:t,translator:l}),d=new b.NotebookTools.ActiveCellTool,i=b.NotebookTools.createSlideShowSelector(l),u=o.factoryService.newInlineEditor,m=new b.NotebookTools.CellMetadataEditorTool({editorFactory:u,collapsed:!1,translator:l}),p=new b.NotebookTools.NotebookMetadataEditorTool({editorFactory:u,translator:l});return e.serviceManager.nbconvert.getExportFormats().then((e=>{if(e){const t=["pdf","slides","script","notebook","custom"];let o=[[r.__("PDF"),"pdf"],[r.__("Slides"),"slides"],[r.__("Script"),"script"],[r.__("Notebook"),"notebook"],[r.__("Custom"),"custom"]];const n=Object.keys(e),a=H.getFormatLabels(l);n.forEach((function(n){if(-1===t.indexOf(n)){const t=r.__(n[0].toUpperCase()+n.substr(1)),l=a[n]?a[n]:t,s=e[n].output_mimetype;o.push([l,s])}}));const s=b.NotebookTools.createNBConvertSelector(o,l);c.addItem({tool:s,section:"common",rank:3})}})),c.title.icon=x.buildIcon,c.title.caption=r.__("Notebook Tools"),c.id=s,c.addItem({tool:d,section:"common",rank:1}),c.addItem({tool:i,section:"common",rank:2}),c.addItem({tool:m,section:"advanced",rank:1}),c.addItem({tool:p,section:"advanced",rank:2}),f.MessageLoop.installMessageHook(c,((e,t)=>{switch(t.type){case"activate-request":n.save(s,{open:!0});break;case"after-hide":case"close-request":n.remove(s)}return!0})),a&&t.widgetAdded.connect(((e,t)=>{a.register(t).render(c)})),c},provides:b.INotebookTools,id:"@jupyterlab/notebook-extension:tools",autoStart:!0,requires:[b.INotebookTracker,r.IEditorServices,C.IStateDB,A.ITranslator],optional:[m.IPropertyInspectorProvider]},R={id:"@jupyterlab/notebook-extension:mode-status",autoStart:!0,requires:[b.INotebookTracker,A.ITranslator],optional:[g.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const{shell:l}=e,a=new b.CommandEditStatus(o);t.currentChanged.connect((()=>{const e=t.currentWidget;a.model.notebook=e&&e.content})),n.registerStatusItem("@jupyterlab/notebook-extension:mode-status",{item:a,align:"right",rank:4,isActive:()=>!!l.currentWidget&&!!t.currentWidget&&l.currentWidget===t.currentWidget})}},B={id:"@jupyterlab/notebook-extension:export",autoStart:!0,requires:[A.ITranslator,b.INotebookTracker],optional:[u.IMainMenu,l.ICommandPalette],activate:(e,t,o,n,l)=>{const a=t.load("jupyterlab"),{commands:r,shell:c}=e,d=e.serviceManager;r.addCommand(S.exportToFormat,{label:e=>{const t=e.label;return e.isPalette?a.__("Export Notebook: %1",t):t},execute:e=>{const t=W(o,c,e);if(!t)return;const n=s.PageConfig.getNBConvertURL({format:e.format,download:!0,path:t.context.path}),l=window.open("","_blank"),{context:a}=t;return l&&(l.opener=null),a.model.dirty&&!a.model.readOnly?a.save().then((()=>{null==l||l.location.assign(n)})):new Promise((e=>{null==l||l.location.assign(n),e(void 0)}))},isEnabled:()=>H.isEnabled(c,o)});const i=new v.Menu({commands:r});i.title.label=a.__("Export Notebook As…"),d.nbconvert.getExportFormats().then((e=>{if(e){const o=H.getFormatLabels(t);if(Object.keys(e).forEach((function(e){const t=a.__(e[0].toUpperCase()+e.substr(1)),n=o[e]?o[e]:t;let r={format:e,label:n,isPalette:!1};if(-1===I.indexOf(e)&&(i.addItem({command:S.exportToFormat,args:r}),l)){r={format:e,label:n,isPalette:!0};const t=a.__("Notebook Operations");l.addItem({command:S.exportToFormat,category:t,args:r})}})),n){const e=[{type:"submenu",submenu:i}];n.fileMenu.addGroup(e,10)}}}))}},L={id:"@jupyterlab/notebook-extension:trust-status",autoStart:!0,requires:[b.INotebookTracker,A.ITranslator],optional:[g.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const{shell:l}=e,a=new b.NotebookTrustStatus(o);t.currentChanged.connect((()=>{const e=t.currentWidget;a.model.notebook=e&&e.content})),n.registerStatusItem("@jupyterlab/notebook-extension:trust-status",{item:a,align:"right",rank:3,isActive:()=>!!l.currentWidget&&!!t.currentWidget&&l.currentWidget===t.currentWidget})}},P={id:"@jupyterlab/notebook-extension:widget-factory",provides:b.INotebookWidgetFactory,requires:[b.NotebookPanel.IContentFactory,r.IEditorServices,p.IRenderMimeRegistry,l.ISessionContextDialogs,A.ITranslator],activate:function(e,t,o,n,l,a){const r=new b.NotebookWidgetFactory({name:M,fileTypes:["notebook"],modelName:"notebook",defaultFor:["notebook"],preferKernel:!0,canStartKernel:!0,rendermime:n,contentFactory:t,editorConfig:b.StaticNotebook.defaultEditorConfig,notebookConfig:b.StaticNotebook.defaultNotebookConfig,mimeTypeService:o.mimeTypeService,sessionDialogs:l,translator:a});return e.docRegistry.addWidgetFactory(r),r},autoStart:!0},K={id:"@jupyterlab/notebook-extension:cloned-outputs",requires:[c.IDocumentManager,b.INotebookTracker,A.ITranslator],optional:[n.ILayoutRestorer],activate:function(e,t,o,n,a){const r=n.load("jupyterlab"),s=new l.WidgetTracker({namespace:"cloned-outputs"});a&&a.restore(s,{command:S.createOutputView,args:e=>({path:e.content.path,index:e.content.index}),name:e=>`${e.content.path}:${e.content.index}`,when:o.restored});const{commands:c,shell:d}=e;c.addCommand(S.createOutputView,{label:r.__("Create New View for Output"),execute:async e=>{var a;let r,c;const d=e.path;let i=e.index;if(d&&null!=i){if(c=t.findWidget(d,M),!c)return}else{if(c=o.currentWidget,!c)return;r=c.content.activeCell,i=c.content.activeCellIndex}const u=new H.ClonedOutputArea({notebook:c,cell:r,index:i,translator:n}),b=new l.MainAreaWidget({content:u});c.context.addSibling(b,{ref:c.id,mode:"split-bottom"});const m=()=>{s.save(b)};c.context.pathChanged.connect(m),null===(a=c.context.model)||void 0===a||a.cells.changed.connect(m),s.add(b),c.content.disposed.connect((()=>{var e;c.context.pathChanged.disconnect(m),null===(e=c.context.model)||void 0===e||e.cells.changed.disconnect(m),b.dispose()}))},isEnabled:()=>H.isEnabledAndSingleSelected(d,o)})},autoStart:!0},F={id:"@jupyterlab/notebook-extension:code-console",requires:[b.INotebookTracker,A.ITranslator],activate:function(e,t,o){const n=o.load("jupyterlab"),{commands:l,shell:a}=e,r=()=>H.isEnabled(a,t);l.addCommand(S.createConsole,{label:n.__("New Console for Notebook"),execute:e=>{const o=t.currentWidget;if(o)return H.createConsole(l,o,e.activate)},isEnabled:r}),l.addCommand(S.runInConsole,{label:n.__("Run Selected Text or Current Line in Console"),execute:async e=>{var o,n;const a=t.currentWidget;if(!a)return;const{context:r,content:s}=a,c=s.activeCell,d=null==c?void 0:c.model.metadata.toJSON(),i=r.path;if(!c||"code"!==c.model.type)return;let u;const b=c.editor,m=b.getSelection(),{start:p,end:k}=m;if(p.column!==k.column||p.line!==k.line){const e=b.getOffsetAt(m.start),t=b.getOffsetAt(m.end);u=b.model.value.text.substring(e,t)}else{const e=b.getCursorPosition(),t=b.model.value.text.split("\n");let l=m.start.line;for(;l<b.lineCount&&!t[l].replace(/\s/g,"").length;)l+=1;let r=l>0,s=0,c=s+1;for(;;){u=t.slice(s,c).join("\n");const d=await(null===(n=null===(o=a.context.sessionContext.session)||void 0===o?void 0:o.kernel)||void 0===n?void 0:n.requestIsComplete({code:u+"\n\n"}));if("complete"===(null==d?void 0:d.content.status)){if(l<c){for(;c<b.lineCount&&!t[c].replace(/\s/g,"").length;)c+=1;b.setCursorPosition({line:c,column:e.column});break}s=c,c=s+1}else if(c<b.lineCount)c+=1;else{if(!r){for(u=t[l];l+1<b.lineCount&&!t[l+1].replace(/\s/g,"").length;)l+=1;b.setCursorPosition({line:l+1,column:e.column});break}s=l,c=l+1,r=!1}}}u&&(await l.execute("console:open",{activate:!1,insertMode:"split-bottom",path:i}),await l.execute("console:inject",{activate:!1,code:u,path:i,metadata:d}))},isEnabled:r})},autoStart:!0},D=[j,O,B,T,R,L,P,y,K,F];function W(e,t,o){const n=e.currentWidget;return!1!==o.activate&&n&&t.activateById(n.id),n}var H;!function(e){e.createConsole=function(e,t,o){const n={path:t.context.path,preferredLanguage:t.context.model.defaultKernelLanguage,activate:o,ref:t.id,insertMode:"split-bottom"};return e.execute("console:create",n)},e.isEnabled=function(e,t){return null!==t.currentWidget&&t.currentWidget===e.currentWidget},e.isEnabledAndSingleSelected=function(t,o){if(!e.isEnabled(t,o))return!1;const{content:n}=o.currentWidget,l=n.activeCellIndex;for(let e=0;e<n.widgets.length;++e)if(n.isSelected(n.widgets[e])&&e!==l)return!1;return!0},e.isEnabledAndHeadingSelected=function(t,o){if(!e.isEnabled(t,o))return!1;const{content:n}=o.currentWidget,l=n.activeCellIndex;if(!(n.activeCell instanceof a.MarkdownCell))return!1;for(let e=0;e<n.widgets.length;++e)if(n.isSelected(n.widgets[e])&&e!==l)return!1;return!0},e.getFormatLabels=function(e){const t=(e=e||A.nullTranslator).load("jupyterlab");return{html:t.__("HTML"),latex:t.__("LaTeX"),markdown:t.__("Markdown"),pdf:t.__("PDF"),rst:t.__("ReStructured Text"),script:t.__("Executable Script"),slides:t.__("Reveal.js Slides")}};class t extends v.Panel{constructor(e){super(),this._cell=null;const t=(e.translator||A.nullTranslator).load("jupyterlab");this._notebook=e.notebook,this._index=void 0!==e.index?e.index:-1,this._cell=e.cell||null,this.id=`LinkedOutputView-${w.UUID.uuid4()}`,this.title.label="Output View",this.title.icon=x.notebookIcon,this.title.caption=this._notebook.title.label?t.__("For Notebook: %1",this._notebook.title.label):t.__("For Notebook:"),this.addClass("jp-LinkedOutputView"),this._notebook.context.ready.then((()=>{if(this._cell||(this._cell=this._notebook.content.widgets[this._index]),!this._cell||"code"!==this._cell.model.type)return void this.dispose();const e=this._cell.cloneOutputArea();this.addWidget(e)}))}get index(){return this._cell?_.ArrayExt.findFirstIndex(this._notebook.content.widgets,(e=>e===this._cell)):this._index}get path(){return this._notebook.context.path}}e.ClonedOutputArea=t}(H||(H={}))}}]);
//# sourceMappingURL=8389.b495455aa26f291eb5fd.js.map