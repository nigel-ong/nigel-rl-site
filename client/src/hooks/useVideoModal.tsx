import { createContext, useContext, useState } from "react";

type VideoModalContextType = {
  videoId: string | null;
  isOpen: boolean;
  openVideoModal: (id: string) => void;
  closeVideoModal: () => void;
};

const VideoModalContext = createContext<VideoModalContextType>({
  videoId: null,
  isOpen: false,
  openVideoModal: () => {},
  closeVideoModal: () => {},
});

export function VideoModalProvider({ children }: { children: React.ReactNode }) {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = (id: string) => {
    setVideoId(id);
    setIsOpen(true);
  };

  const closeVideoModal = () => {
    setIsOpen(false);
    // Clear the video ID after animation completes
    setTimeout(() => setVideoId(null), 300);
  };

  return (
    <VideoModalContext.Provider value={{ videoId, isOpen, openVideoModal, closeVideoModal }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) {
    throw new Error("useVideoModal must be used within a VideoModalProvider");
  }
  return context;
}