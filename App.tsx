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

      import React from 'react';

type ChatPanelProps = {
  onPreview: (title: string, content: string) => void;
  apiKey: string;
  onApiKeyRequest: () => void;
};

export function ChatPanel({ onPreview, apiKey, onApiKeyRequest }: ChatPanelProps) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <p>API Key: {apiKey ? 'Set' : 'Not Set'}</p>
      <button
        onClick={onApiKeyRequest}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Set API Key
      </button>
      <button
        onClick={() => onPreview('Sample Preview', '<p>Hello, World!</p>')}
        className="mt-2 ml-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Preview
      </button>
    </div>
  );
}

     import React, { useState } from 'react';

type ApiKeyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (key: string) => void;
};

export function ApiKeyModal({ isOpen, onClose, onSubmit }: ApiKeyModalProps) {
  const [key, setKey] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Enter API Key</h2>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          placeholder="Enter API Key"
        />
        <button
          onClick={() => onSubmit(key)}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Save
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
}

