// import PropTypes from 'prop-types';
import React from 'react';
import Banner from 'components/Banners/Banner';
import { Img } from 'components/SharedStyles/styles';

const HowToWInFriends = require('images/Books/HowToWInFriends.jpg');
const Habits = require('images/Books/7Habits.jpg');
const CrucialConversations = require('images/Books/CrucialConversations.jpg');
const ReWork = require('images/Books/ReWork.jpg');
const TurnTheShiAround = require('images/Books/TurnTheShiAround.jpg');
const TheOneThing = require('images/Books/TheOneThing.jpg');
const StartWithWhy = require('images/Books/StartWithWhy.jpg');
const WhoMovedMyCheese = require('images/Books/WhoMovedMyCheese.jpg');
const ThinkingInSystems = require('images/Books/ThinkingInSystems.jpg');
const YouDontHaveToBeRuthlessToWin = require('images/Books/YouDontHaveToBeRuthlessToWin.jpg');
const LeadersEatLast = require('images/Books/LeadersEatLast.jpg');
const LincolnOnLeardership = require('images/Books/LincolnOnLeardership.jpg');
// const NeverSplitTheDifference = require('images/Books/NeverSplitTheDifference.jpg');

const books = [
  {
    title: 'How to Win Friends & Influence People',
    subTitle: '',
    author: 'Dale Carnegie',
    image: HowToWInFriends,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>For me this is the book that started it all!</p>
        <p>
          When I first read this book, I had the strongest feeling that I had to
          finish it before ever talking to another person. It sparked a profound
          though that there was a better way of communication and more
          importantly that this better way can be learned! My new found journey
          to becoming a leader starts here.
        </p>
        <p>
          This book has given me a new out look on how to talk and work with
          other people, and the type of conversations to aspire to.
        </p>
        <div>
          <p>My 2 favorite quotes from this book are:</p>
          <ul>
            <li>“Be hearty in your approbation and lavish in your praise.”</li>
            <li>
              “I shall pass this way but once; any good, therefore, that I can
              do or any kindness that I can show to any human being, let me do
              it now. Let me not defer nor neglect it, for I shall not pass this
              way again.”
            </li>
          </ul>
        </div>
      </React.Fragment>
    ),
  },
  {
    title: 'The 7 Habits of Highly Effective People',
    subTitle: 'Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey',
    image: Habits,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          To me this book was essential in learning how to implement or adopt an
          idea. I love how it creates a cycle that must be repeated not only to
          learn a new idea but to reenforce and evolve others. Personally I have
          had some small success with it. “Put first things first” gave me an
          understanding that changed my workplace for the better. I started
          prioritizing training over doing the work fast by myself. “Think
          Win-Win” has given me an idea of what to expect when working with new
          ideas and people. I could go over each of the 7 Habits but I will
          leave it to the book to explain.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Crucial Conversations',
    subTitle: 'Tools for Talking When Stakes Are High, Second Edition',
    author: 'Kerry Patterson',
    image: CrucialConversations,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>Getting it right when it matters.</p>
        <p>
          I intend to admit a personal failure here, a mistake that I made long
          ago and never understood the why. This is about a project where I was
          in charge and one which would have made a change so large the benefits
          would be profound. The project came to completion and had full support
          from my direct senors. All we needed was one final sign off. In this
          last meeting an issue came to light. With that we were not given the
          sign off and the projected was canceled. We knew this to be a
          non-issue but we could not find the right words to speak up. It was
          not until I read this book that I even began to understand what had
          happened. This was a Failed Crucial Conversation that would end up
          costing an unbelievable amount of time and money to be spent
          unnecessarily .
        </p>
        <p>
          Crucial Conversations are so common and destructive if handled wrong.
          When I read this book, lights came on in my mind. This is what I need
          to watch for and learn to handle, even in my every day life.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Rework',
    subTitle: '',
    author: 'Jason Fried, David Heinemeier Hansson',
    image: ReWork,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          Short and to the point. Here this book gives us many ideas to follow.
          Some ideas are fighting against the norms. Some you cant help but to
          say Yes Yes!
        </p>
        <div>
          <p>Some of my favorite quotes this book provides are:</p>
          <ul>
            <li>
              “Find a judo solution, one that delivers maximum efficiency with
              minimum effort. When good enough gets the job done, go for it.”
            </li>
            <li>
              “Think about it this way: If you had to launch your business in
              two weeks, what would you cut out?”
            </li>
          </ul>
        </div>
        <p>
          These 2 quotes alone helped me get the Desert Code Camp Scheduler
          deployed and on time for the conference.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Turn the Ship Around!',
    subTitle: 'A True Story of Turning Followers into Leaders',
    author: 'L. David Marquet',
    image: TurnTheShiAround,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          As I read this book im captivated in the story. Marveling in the
          decisions made and how huge the risk taken is. We have all heard about
          taking initiative and empowering your fellow employees. Yes yes of
          course it is obvious we want to do that. We talk about it but how do
          we actually accomplish this? Here is the book to read. It shows the
          difference between talk and making it happen.
        </p>
        <p>
          The idea I will pull out of this book if only just one, is the concept
          of the mechanism. If we want a change find the hart of the problem and
          create an ACTION! Create an action that is capable of changing the
          behavior.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'The One Thing',
    subTitle: 'The Surprisingly Simple Truth Behind Extraordinary Results',
    author: 'Gary Keller, Jay Papasan',
    image: TheOneThing,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          This book conveys an idea that defies modern logic. Reduce all you do
          down to one idea and the one thing you can do to make the most
          difference in completing that idea. I find this concept hard to
          implement but I believe it will be worth the effort.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Who Moved My Cheese?',
    subTitle:
      'An A-Mazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson, Kenneth Blanchard',
    image: WhoMovedMyCheese,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          A way of thinking that shows life is filled with opportunities. This
          helps to explain the different ways a person can process change
          through out there life. As a Software developer change is imbedded in
          our curer.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Start with Why',
    subTitle: 'How Great Leaders Inspire Everyone to Take Action',
    author: 'Simon Sinek',
    image: StartWithWhy,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          Simon is simply and amazing person. I have watch some of his seminars
          and cant help but to be in aww over every word. Start with Why is one
          of my favorite books and i cant wait to read more of his books. I
          Highly recommend this book.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Thinking in Systems',
    subTitle: 'A Primer',
    author: 'Donella H. Meadows',
    image: ThinkingInSystems,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          Prepare to read this book more then once. As the title suggests it is
          a way of thinking, a way of problem solving. Mastering the skills in
          this book would probably make you look like a wise old wizard.
        </p>
        <p>
          This book makes almost everything into a system. So the skills learned
          here will apply to the job, the business, and your life. Using tools
          like different types of feedback loops, to answer questions and how to
          act on this information.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "You Don't Have to Be Ruthless to Win",
    subTitle: 'The Art of Badass Selfless Service',
    author: 'Jonathan Keyser',
    image: YouDontHaveToBeRuthlessToWin,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          Dont let the book cover through you off. The strategy in this book
          promotes a unique outlook on life. A strategy that goes beyond the 9
          to 5 business planning. Selfless Service said simple sums up in this
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          question "What can I do for you?" and expect nothing in return.
        </p>
        <p>
          What I have learned from this book is to always be open to helping
          people. Make sure I ask and understand how I can help others. In the
          short time I have been implementing this idea I have found this is
          where the most effective work gets done. The 20/80 rule almost lives
          here.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Leaders Eat Last',
    subTitle: "Why Some Teams Pull Together and Others Don't",
    author: 'Simon Sinek',
    image: LeadersEatLast,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>
          Im on a mission to improve my leadership skills and create a team that
          out performs. This book is the blue print I will use to make this
          mission happen. To be boots on the ground along side the team.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: 'Lincoln on Leadership',
    subTitle: ' Executive Strategies for Tough Times',
    author: 'Donald T. Phillips',
    image: LincolnOnLeardership,
    selfDescriptionJSX: (
      <React.Fragment>
        <p>How did Lincoln approach leadership?</p>
        <p>
          So many points to pull from this book a full list in fact. But the one
          point I love the most is the boots on the ground the looking to talk
          with others. This is something as a remote working leader could be the
          most difficult. This might be the most critical aspect I must pull
          from this book.
        </p>
      </React.Fragment>
    ),
  },
];

function Books() {
  const BooksJSX = books.map(book => (
    <Banner key={book.title}>
      <h4>{book.title}</h4>
      <h6>{book.subTitle}</h6>
      <p>By: {book.author}</p>
      <div className="row">
        <div className="col-md-8">
          <div>{book.selfDescriptionJSX}</div>
        </div>
        <div className="col-md-4 text-center">
          <Img src={book.image} alt={book.title} />
        </div>
      </div>
    </Banner>
  ));
  return <div className="container">{BooksJSX}</div>;
}

export default Books;
