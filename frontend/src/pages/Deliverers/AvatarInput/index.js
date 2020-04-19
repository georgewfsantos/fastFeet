import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { MdInsertPhoto } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ fileObj }) {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();
  useEffect(() => {
    if (fileObj) {
      setFile(fileObj.id);
      setPreview(fileObj.url);
    }
  }, [fileObj]);
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <div className="holder">
          {preview ? (
            <img src={preview} alt="Insert " />
          ) : (
            <>
              <MdInsertPhoto size={35} color="#ddd" />
              <span>Adicionar imagem</span>
            </>
          )}
        </div>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  fileObj: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
};

AvatarInput.defaultProps = {
  fileObj: null,
};
