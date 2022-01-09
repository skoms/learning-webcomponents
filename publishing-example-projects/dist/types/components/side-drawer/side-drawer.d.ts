export declare class SideDrawer {
  title: string;
  opened: boolean;
  showContactInfo: boolean;
  onCloseDrawer: () => boolean;
  onContentChange: (content: string) => void;
  open(): void;
  render(): any[];
}
