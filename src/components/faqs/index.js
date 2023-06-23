import React from 'react'

const Faqs = () => {
    const faqs = [
        {
            id: 1,
            question: 'I want to understand how your bot works?',
            answer: <p className='text-white text-xl'>
                The MEV Bot tracks transactions on the selected decentralized exchange and finds among these
                transactions large orders that affect the liquidity in the pool and the price of the token. With an
                increased transaction fee, it makes a purchase of the same token slightly earlier and at a lower price.
                Once a large order goes into the blockchain. The price of the token in the liquidity pool increases.
                And immediately the MEV Bot sells the token at a profit. The bot earns 0.5-5% from each transaction
                on these MEV attacks. The bot can make up to 20 or more such deals per work cycle. In automatic
                mode and with minimal risk
            </p>
        },
        {
            id: 2,
            question: 'Are there any restrictions if I want to withdraw my money?',
            answer: <p className='text-white text-xl'>
                There are no restrictions on the withdrawal of money. You retain full access and control over your
                wallet. And you can withdraw funds from it at any time. You cannot withdraw money when the bot
                is running. You can withdraw only when you stop the bot.
            </p>
        },
        {
            id: 3,
            question: "If I'm not satisfied with something, can I get my money back for the license?",
            answer: <p className='text-white text-xl'>
                Refunds for licenses are available within 7 days after purchase. Refunds take from 3 days to 10 days.
                And you may be asked for additional documents.
            </p>
        },
        {
            id: 4,
            question: "Why does my wallet need a minimum balance?",
            answer: <p className='text-white text-xl'>
                The MEV Bot automatically finds opportunities for MEV attacks by manipulating the liquidity pool.
                The higher the starting capital, the more MEV transactions MEV Bot can open simultaneously, and
                the higher the final profit. Without a minimum balance the MEV Bot simply cannot start working.
                The cost of the license is paid separately. This is the amount of reward for the MEV Bot’s team.
            </p>
        },
        {
            id: 5,
            question: "I have other tokens in my wallet, what will happen to them when I start MEV Bot?",
            answer: <p className='text-white text-xl'>
                The MEV Bot does not touch any tokens in your wallet. It does not see them. The bot makes
                transactions using only the main asset of the ETHEREUM blockchain - ETH. Automatically makes MEV
                attacks, increasing the balance of your wallet in ETH.
            </p>
        },
        {
            id: 6,
            question: "I would like to test the ETHEREUM MEV Bot before I buy it. Do you have a Trial version?",
            answer: <p className='text-white text-xl'>
                FREE TRIAL version of the MEV Bot with all the functionality of the START license is available to you
                for 14 days.
            </p>
        },
        {
            id: 7,
            question: "If I want to upgrade my license, do I just have to pay the difference in price?",
            answer: <p className='text-white text-xl'>
                We do not provide for license upgrades. The MEV Bot uses customized algorithms for each type of
                license and your arbitrage wallet is tied to your license. If you want to switch to a new license you
                will have to pay the full cost of it and create a separate wallet for the new license.
            </p>
        },
        {
            id: 8,
            question: "Can I pay for my license in bitcoins?",
            answer: <p className='text-white text-xl'>
                No you cannot. You can only pay through ETH.
            </p>
        },
        {
            id: 9,
            question: "How does the ETHEREUM MEV Bot fee payment process work?",
            answer: <p className='text-white text-xl'>
                Fee is automatically calculated from the profit made and paid at the end of each arbitrage cycle or
                after each transaction. You can specify this in the settings of the bot.
            </p>
        }
    ]
    return (
        <div className='py-12'>
            <div className='custom-container'>
                <div className="border border-[#393939] rounded-md flex items-center overflow-hidden">
                    <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
                        Frequently Asked Questions
                    </button>
                </div>

                <div className="mt-10">
                    {
                        faqs.map(faq => (
                            <div key={faq.id} className='mb-6'>
                                <div className='flex flex-col gap-4 items-start justify-between'>
                                    <h3 className='text-[#00FFA2] text-2xl font-bold'>{faq.question}</h3>
                                    {
                                        faq.answer
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faqs