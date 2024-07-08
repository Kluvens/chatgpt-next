import React from 'react';

type ShortcutBoxProps = {
  shortcut: string;
};

const ShortcutBox: React.FC<ShortcutBoxProps> = ({ shortcut }) => {
  return (
    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
      <span className="text-xs">{shortcut}</span>
    </div>
  );
};

export default ShortcutBox;
