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
  onBookEdit(data: Array<any>, id: number): any;
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
      onBookEdit([newData], bookDetails.id);
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
          />
          <div>
            by -{' '}
            <TextField
              label="author"
              onSaveClick={handleSaveClick}
              value={bookDetails.author}
              canEdit={canEdit}
            />
          </div>
          <div>
            available books -{' '}
            <TextField
              label="count"
              onSaveClick={handleSaveClick}
              value={bookDetails.count}
              canEdit={canEdit}
            />
          </div>
        </BookMetaData>
        <BookActions>
          <button type="button" onClick={handleEditClick}>
            {canEdit ? 'Save' : 'Edit'}
          </button>
        </BookActions>
      </BookDetailsContainer>
      <BookDescriptionContainer>
        {bookDetails.description}
      </BookDescriptionContainer>
    </BookInfoContainer>
  );
};

export default BookInfo;
