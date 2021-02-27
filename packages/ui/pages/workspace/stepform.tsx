import React, { useState } from 'react';
import { AppLayout } from 'components/AppLayout';
import { Icon } from 'components/Icon';
import { LetterPic } from 'components/LetterPic';
import Link from 'next/link';
import { BasicInfoForm } from 'components/BasicInfoForm';
import { MutationForm } from 'components/MutationForm';
import { ProteinForm } from 'components/ProteinForm';
import { EligibleSection } from 'components/EligibleSection';
import { NotEligibleSection } from 'components/NotEligibleSection';
import styles from 'styles/stepform.module.css';

const stepform = () => {
  const [showBasicInfoForm, setBasicInfo] = useState(true);
  const [showMutationForm, setShowMutationForm] = useState(false);
  const [showProteinForm, setShowProteinForm] = useState(false);
  const [isShowEligibleSection, setShowEligibleSection] = useState(
    false,
  );

  return (
    <AppLayout>
      <div className={styles['stepform']}>
        <div className={styles['stepform-divOne']}>
          <h1 style={{ fontWeight: 'bold' }}>WorkSpace</h1>
        </div>
        <div>
          <div className={styles['stepform-divTwo']}>
            <div className={styles['stepform-divThree']}>
              <Link href="/workspace">
                <span style={{ width: '1rem', cursor: 'pointer' }}>
                  <Icon
                    name="arrowleft"
                    className="hover:text-gray-400"
                  />
                </span>
              </Link>

              <div className={styles['stepform-divFour']}>
                <h1 style={{ fontWeight: 'bold' }}>
                  Determine feasibility for AAV based Gene Therapy
                </h1>
                <p>
                  Complete the short questionnaire crafted by our
                  network of scientists to assess AAV based gene
                  therapy feasibility.
                </p>
              </div>
            </div>
          </div>
          <div style={{ padding: '0 1rem' }}>
            <div className={styles['stepform-divFive']}>
              <div style={{ width: '60%' }}>
                {showProteinForm ||
                showMutationForm ||
                showBasicInfoForm ? (
                  <div
                    // className="flex justify-between  items-center"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      // className="flex items-center"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <LetterPic
                        letter="1"
                        color="custom"
                        textColor={null}
                        className={styles['lp']}
                        size="sm"
                      />
                      <span style={{ marginLeft: '0.25rem' }}>
                        Basic Info
                      </span>
                    </div>
                    <span
                      className={`${styles['span']} ${
                        showMutationForm || showProteinForm
                          ? styles['b-blue']
                          : styles['b-gray']
                      }`}
                    />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <LetterPic
                        letter="2"
                        color="custom"
                        textColor={null}
                        className={`${styles['lp-One']} ${
                          showMutationForm || showProteinForm
                            ? styles['br-blue']
                            : styles['br-gray']
                        }`}
                        size="sm"
                      />
                      <span style={{ marginLeft: '0.25rem' }}>
                        Mutation
                      </span>
                    </div>
                    <span
                      className={`${styles['span']} ${
                        showProteinForm
                          ? styles['b-blue']
                          : styles['b-gray']
                      }`}
                      // className={`${styles['span']}${
                      //   showProteinForm
                      //     ? styles['b-blue']
                      //     : styles['b-gray']
                      // }`}
                    />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <LetterPic
                        letter="3"
                        color="custom"
                        textColor={null}
                        className={` ${styles['lp-One']} ${
                          showProteinForm
                            ? styles['br-blue']
                            : styles['br-gray']
                        }`}
                        size="sm"
                      />
                      <span style={{ marginLeft: '0.25rem' }}>
                        Protein
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
              {showBasicInfoForm && (
                <BasicInfoForm
                  setShowMutationForm={setShowMutationForm}
                  setShowProteinForm={setShowProteinForm}
                  setBasicInfo={setBasicInfo}
                  showBasicInfoForm={showBasicInfoForm}
                />
              )}

              {showMutationForm && (
                <MutationForm
                  setShowProteinForm={setShowProteinForm}
                  setBasicInfo={setBasicInfo}
                  setShowMutationForm={setShowMutationForm}
                  showMutationForm={showMutationForm}
                />
              )}
              {showProteinForm && (
                <ProteinForm
                  setBasicInfo={setBasicInfo}
                  setShowMutationForm={setShowMutationForm}
                  setShowProteinForm={setShowProteinForm}
                  setShowEligibleSection={setShowEligibleSection}
                  showProteinForm={showProteinForm}
                />
              )}
              {!showProteinForm &&
                !showMutationForm &&
                !showBasicInfoForm &&
                (isShowEligibleSection ? (
                  <EligibleSection
                    setShowEligibleSection={setShowEligibleSection}
                    isShowEligibleSection={isShowEligibleSection}
                  />
                ) : (
                  <NotEligibleSection
                    isShowEligibleSection={isShowEligibleSection}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default stepform;
