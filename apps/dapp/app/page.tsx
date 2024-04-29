/* eslint-disable */

import React from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, HomeTabs } from '@demo-app/ui-elements';
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
                  <h1>Create New Idea</h1>
                </div>
                  <HomeTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
