import React from 'react';
import {WebView} from 'react-native-webview';
import QRCode from 'react-native-qrcode';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          bgColor="#fff"
          fgColor="#8b10ae"
        />
      </Code>
    </Container>
  );
}
