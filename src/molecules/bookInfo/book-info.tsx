import React, { useEffect } from 'react';
import TextField from '../../atoms/TextField';
import {
  BookInfoContainer,
  BookDetailsContainer,
  BookMetaData,
  BookActions,
  BookDescriptionContainer,
} from './book-info-styles';

type bookType = {
  id: number;
  name: string;
  author: string;
  description: string;
  count: string;
};

type Props = {
  bookDetails: any;
  onBookEdit(data: bookType): any;
};

const BookInfo: React.FunctionComponent<Props> = ({
  bookDetails,
  onBookEdit,
}: Props) => {
  const [canEdit, setCanEdit] = React.useState<boolean>(false);

  const handleEditClick = () => {
    setCanEdit(!canEdit);
  };

  const handleSaveClick = (newVal: string, key: string) => {
    const tempData = { ...bookDetails };
    if (tempData[key] !== newVal) {
      const newData = { ...tempData, [key]: newVal };
      onBookEdit(newData);
    }
  };

  return (
    <BookInfoContainer>
      <BookDetailsContainer>
        <BookMetaData>
          <TextField
            label="name"
            onSaveClick={handleSaveClick}
            value={bookDetails.name}
            canEdit={canEdit}
            width="89%"
          />
          <div>
            by -{' '}
            <TextField
              label="author"
              onSaveClick={handleSaveClick}
              value={bookDetails.author}
              canEdit={canEdit}
              width="75%"
            />
          </div>
          <div>
            available books -{' '}
            <TextField
              label="count"
              onSaveClick={handleSaveClick}
              value={bookDetails.count}
              canEdit={canEdit}
              width="34%"
            />
          </div>
        </BookMetaData>
        <BookActions>
          <button
            style={{ fontSize: 'inherit' }}
            type="button"
            onClick={handleEditClick}
          >
            {canEdit ? 'Save' : 'Edit'}
          </button>
        </BookActions>
      </BookDetailsContainer>
      <BookDescriptionContainer>
        <TextField
          label="description"
          value={bookDetails.description}
          onSaveClick={handleSaveClick}
          canEdit={canEdit}
          width="100%"
        />
      </BookDescriptionContainer>
    </BookInfoContainer>
  );
};

export default BookInfo;
