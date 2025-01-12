import React from 'react';
import Header from '../ui/Header';
import Label from '../ui/Label';
import BulletList from '../ui/BulletList';

function FAQ() {
    const faqEntries = [
        {
            title: 'How do I use BrokerX?',
            description:
                "To begin a stock analysis, from the Home page type in any stock symbol (for example, Apple's stock symbol is $AAPL). Then, click the arrow on the right end of the search bar and view the results!",
        },
        {
            title: 'How does BrokerX work?',
            description:
                'Given your input (a specific stock symbol), BrokerX gathers information from X/Twitter and performs sentiment analysis on the data recovered to determine whether you should buy or sell that given stock.',
        },
        {
            title: 'Will BrokerX support other social media websites?',
            description:
                "I do not have any current plans to expand BrokerX's data retrieval pool. However, I am open to the idea in the future!",
        },
        {
            title: "What is BrokerX's pricing structure?",
            description:
                'BrokerX is and will remain free for the foreseeable future!',
        },
        {
            title: 'I have an issue. How can I contact support?',
            description:
                "At the moment, I don't have a designated support email. However, in the meantime, you can post an issue on the GitHub repository for BrokerX (which you can navigate to by clicking the Octocat icon in the top right of the screen).",
        },
        {
            title: "Where can I learn more about BrokerX's development?",
            description:
                'The entire codebase is publicly available on a GitHub repository! You can access the repository by clicking the Octocat icon on the right side of the header.',
        },
    ];

    return (
        <div className="flex flex-col text-center bg-stone-100 min-h-screen w-full pb-10">
            <Header variant="faq"></Header>
            <div className="flex justify-center pt-24 pb-6">
                <Label
                    variant="large"
                    text="Frequently Asked Questions"
                ></Label>
            </div>
            <div className="flex justify-center">
                <BulletList entries={faqEntries}></BulletList>
            </div>
        </div>
    );
}

export default FAQ;
