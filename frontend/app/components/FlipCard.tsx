// components/FlipCard.tsx
'use client';

import styled from 'styled-components';

const FlipCard = () => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2 className="text-2xl font-bold mb-2">🌟 Our Hall Highlights</h2>
            <p className="text-sm text-gray-700">Hover to discover more</p>
          </div>
          <div className="card-back">
            <ul className="text-left text-base space-y-3 list-disc pl-6">
              <li>✨ Spacious seating for 500+ guests</li>
              <li>🎤 Modern lighting and sound systems</li>
              <li>❄️ AC banquet hall & dining area</li>
              <li>🚗 Ample car & bike parking</li>
              <li>🎯 Dedicated event management team</li>
            </ul>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  perspective: 1500px;

  .card {
    width: 100%;
    height: 400px;
    position: relative;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.9s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    backface-visibility: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-front {
    background: linear-gradient(to right, #fef3c7, #fde68a); /* yellow tint */
    color: #1f2937; /* gray-800 */
  }

  .card-back {
    background: linear-gradient(to right, #fbbf24, #f59e0b); /* deeper amber */
    color: white;
    transform: rotateY(180deg);
  }

  @media (max-width: 500px) {
    .card {
      height: 250px;
    }

    .card-front h2 {
      font-size: 1.25rem;
    }

    .card-back ul {
      font-size: 0.9rem;
    }
  }
`;

export default FlipCard;
