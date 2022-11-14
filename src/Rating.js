// Rating component rendered with search result
// Flex container, display on bottom of cards

import React from 'react'

export function Rating () {
    return (
        <div>
            <h5>Rating</h5>
            <div>
              <Rating
                emptySymbol="fa fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                readonly
                initialRating={2}
              />
            </div>
        </div>
    )
}