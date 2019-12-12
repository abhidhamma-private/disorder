import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from './AuthQueries';
import { toast } from 'react-toastify';

export default () => {
  const [action, setAction] = useState('logIn');
  const userName = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const secret = useInput('');
  const email = useInput('');
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();
    if (action === 'logIn') {
      if (email.value !== '') {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error('아직 계정이 없습니다., 하나만들어야해요.');
            setTimeout(() => setAction('signUp'), 3000);
          } else {
            toast.success('이메일에 전송된 키를 확인하세요');
            setAction('confirm');
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        toast.error('에러');
      }
    } else if (action === 'signUp') {
      if (
        email.value !== '' &&
        userName.value !== '' &&
        firstName.value !== '' &&
        lastName.value !== ''
      ) {
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error('에러');
          } else {
            toast.success('계정이 만들어졌어요! 지금접속해보세요');
            setTimeout(() => setAction('logIn'), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error('다 작성해주셔야합니다');
      }
    } else if (action === 'confirm') {
      if (secret.value !== '') {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          console.log(token);
          if (token !== '' && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error('인증키가 올바르지 않습니다 다시확인해주세요.');
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
