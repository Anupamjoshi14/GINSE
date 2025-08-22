import React, { useState } from 'react';
import { ChatPanel } from './components/ChatPanel';
import { ApiKeyModal } from './components/ApiKeyModal';
import { PreviewModal } from './components/PreviewModal';

function App() {
  const [apiKey, setApiKey] = useState<string>('');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [previewContent, setPreviewContent] = useState<string>('');
  const [previewTitle, setPreviewTitle] = useState<string>('Preview');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    setIsApiKeyModalOpen(false);
  };

  const handlePreviewOpen = (title: string, content: string) => {
    setPreviewTitle(title);
    setPreviewContent(content);
    setIsPreviewOpen(true);
    setIsLoading(false); // Set to true if loading async content
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Vibe to Code</h1>

      <ChatPanel
        onPreview={(title, content) => handlePreviewOpen(title, content)}
        apiKey={apiKey}
        onApiKeyRequest={() => setIsApiKeyModalOpen(true)}
      />

      <ApiKeyModal
        onSubmit={handleApiKeySubmit}
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        serviceName={previewTitle}
        htmlContent={previewContent}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
