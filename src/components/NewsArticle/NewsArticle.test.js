import React from 'react';
import {render} from '@testing-library/react';
import NewsArticle from './NewsArticle';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
  it('Has and displays a headline, image, and description', () => {
    const {getByText} = render(<NewsArticle
      id={1}
      headline={"Dog Learns English"}
      img={"https://www.thesprucepets.com/thmb/wHFNEHCOSfmM8A1AG0hIvgpT_PA=/2121x1414/filters:fill(auto,1)/golden-retriever-puppy-in-grass-923135452-5c887d4146e0fb00013365ba.jpg"}
      description={"Spot's owner bought him Rosetta Stone for dogs, and he learned English in 20 minutes!"}
    />)

    expect(getByText("Dog Learns English")).toBeInTheDocument();
    expect(getByText("Spot's owner bought him Rosetta Stone for dogs, and he learned English in 20 minutes!")).toBeInTheDocument();
  });
});
