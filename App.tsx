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
        import React from 'react';

interface ChatPanelProps {
  onPreview: (title: string, content: string) => void;
  apiKey: string;
  onApiKeyRequest: () => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({ onPreview, apiKey, onApiKeyRequest }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p>ChatPanel Component</p>
      <button onClick={() => onApiKeyRequest()}>Enter API Key</button>
      <button onClick={() => onPreview('Sample Preview', '<p>This is a preview</p>')}>Show Preview</button>
    </div>
  );
};

      />

      <ApiKeyModal
       import React, { useState } from 'react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (key: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [key, setKey] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Enter API Key</h2>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button onClick={() => onSubmit(key)} className="mr-2">Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

      />

      <PreviewModal
       import React from 'react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  htmlContent: string;
  isLoading: boolean;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, serviceName, htmlContent, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-3/4 max-h-screen overflow-auto">
        <h2 className="text-xl font-bold mb-4">{serviceName}</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
        <button onClick={onClose} className="mt-4">Close</button>
      </div>
    </div>
  );
};


export default App;
