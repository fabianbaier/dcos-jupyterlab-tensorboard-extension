import { IFrame } from '@jupyterlab/apputils';
    
/**
 * An in browser proxied TensorBoard.
 **/
export class TensorBoardTab extends IFrame {
  /**
   * Construct a new TensorBoard widget.
   **/
  constructor() {
    super();
    this.addClass('jp-TensorBoard');
    // URL being proxied
    this.url = "tensorboard/";
    // Initialize settings.
    this.id = `jp-TensorBoard-proxied`;
    this.title.icon = 'jp-TensorBoard-tabIcon';
    this.title.label = `DC/OS TensorBoard`;
    this.title.closable = true;
    let caption = `Name: DC/OS TensorBoard`;
    this.title.caption = caption;
  }
}
