import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head>
          {/* PRECONNECT AND PREFETCH FONTS GOOGLE */}
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossOrigin='true'
          />
          <link rel='dns-prefetch' href='https://fonts.gstatic.com/' />

          {/* BOOTSTRAP_CSS CDN */}
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
            integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
            crossOrigin='anonymous'
          />
          {/* GOOGLE ANALYTICS */}
          <meta
            name='google-site-verification'
            content='7yawzIJsXf4KhQoLEZIycYNRJx4frii8CE5Ts8U7Cus'
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* BOOTSTRAP_JS CDN */}
          <script
            defer
            src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
            integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
            crossOrigin='anonymous'
          ></script>
          <script
            defer
            src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'
            integrity='sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN'
            crossOrigin='anonymous'
          ></script>
          <script
            defer
            src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js'
            integrity='sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s'
            crossOrigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
