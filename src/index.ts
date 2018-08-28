import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';
import { ICommandPalette, InstanceTracker, IInstanceTracker } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import { TensorBoardTab } from './tab';
import '../style/index.css';
  
/**
 * The command IDs used by the TensorBoard plugin.
 **/
namespace CommandIDs { 
    export const open = 'tensorboard:open';
}
  
/**
 * Initialization data for the TensorBoard extension.
 **/
const extension: JupyterLabPlugin<IInstanceTracker<TensorBoardTab>> = {
    activate,
    id: 'tensorboard',
    requires: [ICommandPalette],
    optional: [ILauncher],
    autoStart: true,
};
    
function activate(app: JupyterLab, palette: ICommandPalette, launcher: ILauncher | null): InstanceTracker<TensorBoardTab> {

    const namespace = 'tensorboard';
    const tracker = new InstanceTracker<TensorBoardTab>({ namespace })

    addCommands(app, tracker, launcher);

    palette.addItem({ command: CommandIDs.open , category: 'Mesosphere DC/OS Extension', args: { isPalette: true } });

    return tracker
}
  
  /**
   * Add the commands for the tensorboard.
   */
export function addCommands(app: JupyterLab, tracker: InstanceTracker<TensorBoardTab>, launcher: ILauncher | null) {
    
    let { commands } = app;
  
    commands.addCommand(CommandIDs.open, {
      label: args => (args['isPalette'] ? 'Open TensorBoard' : 'TensorBoard'),
      iconClass: args => (args['isPalette'] ? '' : 'jp-TensorBoard-icon'),
      execute: args => {
        let widget: TensorBoardTab = new TensorBoardTab();
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it's not there
          app.shell.addToMainArea(widget);
        }
       if (widget) {
          app.shell.activateById(widget.id);
          return widget;
        } else {
          let tbt = new TensorBoardTab();
          tracker.add(tbt);
          app.shell.addToMainArea(tbt);
          app.shell.activateById(tbt.id);
          return tbt;
        }
      }
    });
    
    if (launcher) {
        launcher.add({
            command: CommandIDs.open,
            category: 'Other',
            rank: 2,
        });
    }
}

export default extension;
