import React, { memo, useState } from 'react';
import { EditIcon } from './icons/Icons';

interface UserMessageProps {
  message: string;
  onUpdate: (newText: string) => void;
}

const UserMessage: React.FC<UserMessageProps> = ({ message, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedMessage(message);
  };

  const handleSendClick = () => {
    onUpdate(editedMessage);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedMessage(e.target.value);
  };

  return (
    <div className="w-full token-text-primary" dir="auto" data-scroll-anchor="false">
      <div className="py-5 px-3 text-base md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
        <div className="mx-auto flex flex-1 gap-3 text-base gap-4 md:gap-5 lg:gap-6 md:max-w-3xl">
          <div className="group/conversation-turn relative flex w-full min-w-0 flex-col">
            <div className="flex flex-grow flex-col max-w-full">
              {isEditing ? (
                <div className="flex-col gap-1 md:gap-3">
                  <div className="flex flex-grow flex-col max-w-full">
                    <div className="rounded-3xl bg-token-main-surface-tertiary px-3 py-2 juice:py-3">
                      <div className="grid">
                        <textarea
                          className="col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0 juice:w-full juice:p-2"
                          value={editedMessage}
                          onChange={handleInputChange}
                        ></textarea>
                        <span className="invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-2">
                          {editedMessage}
                        </span>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button className="btn relative btn-secondary" onClick={handleCancelClick}>
                          <div className="flex items-center justify-center">Cancel</div>
                        </button>
                        <button className="btn relative btn-primary" onClick={handleSendClick}>
                          <div className="flex items-center justify-center">Send</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  data-message-author-role="user"
                  data-message-id="aaa2dc6b-d4b8-47b4-8d6c-77177020c04a"
                  dir="auto"
                  className="min-h-[20px] text-message flex flex-col items-start whitespace-pre-wrap break-words [.text-message+&]:mt-5 w-full items-end overflow-x-auto gap-2"
                >
                  <div className="flex w-full flex-col gap-1 empty:hidden items-end rtl:items-start">
                    <div className="relative max-w-[70%] rounded-3xl bg-[#f4f4f4] px-5 py-2.5 dark:bg-token-main-surface-secondary">
                      <div>{message}</div>
                      <div className="absolute bottom-0 right-full top-0 -mr-3.5 hidden pr-5 pt-1 group-hover/conversation-turn:block">
                        <span className="" data-state="closed">
                          <button className="flex h-9 w-9 items-center justify-center rounded-full token-text-secondary transition hover:bg-token-main-surface-tertiary" onClick={handleEditClick}>
                            <EditIcon />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UserMessage);
