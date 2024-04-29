import React from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Header, IdeaDetails } from '@demo-app/ui-elements';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LeftNav } from '@demo-app/ui-elements';

export default function Index() {
  return (
    <>      
      <div className={styles.page}>
        <Header />
        <div className="wrapper">
          <div className="container-fluid">
            <LeftNav />
            <div className="content-area">
              <div className="">
                <div className="heading-area">
                  <h1>Get idea details</h1>
                </div>
                  <IdeaDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
