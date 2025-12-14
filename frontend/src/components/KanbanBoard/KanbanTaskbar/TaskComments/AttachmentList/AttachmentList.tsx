import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./AttachmentList.css";

interface AttachmentListProps {
  show: boolean;
  attachments: string[] | undefined;
  onClose: () => void;
}

const AttachmentList = ({
  show,
  attachments,
  onClose,
}: AttachmentListProps) => {
  if (!show || !attachments || attachments.length === 0) return null;

  const slides = attachments.map((attachment) => ({
    src: attachment,
  }));

  return (
    <Lightbox
      open={show}
      close={onClose}
      slides={slides}
      plugins={[Zoom, Slideshow, Fullscreen, Counter, Thumbnails]}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      styles={{ root: { zIndex: 99999 } }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
};

export default AttachmentList;
