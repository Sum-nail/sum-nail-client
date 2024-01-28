import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

import React from 'react';

function ModalPotal({ children }: Props) {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children as any, el);
}

export default ModalPotal;
