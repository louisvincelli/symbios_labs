import React from 'react';
import ResearchCard from './ResearchCard';

const cards = [
    {
        bullets: ['Human-AI Co-Evolution & Mutual Learning', 'Cognitive Augmentation & Intelligence Amplification', 'Neural-Symbolic Hybrid Reasoning', 'Tools for personal and collective growth'],
    },
    {
        bullets: ['Value Alignment & Moral Reasoning', 'Responsible Decision Making and Safety', 'Risk Mitigation', 'Interpretability / Explainability', 'Bias Reduction & Fairness'],
    },
    {
        bullets: ['Affective Computing & Emotional Intelligence', 'Human-Machine Communication', 'Understanding & Interaction (voice, gestures, tone, context)', 'Cognitive-Affective Integration', 'Improving communication between humans and AI'],
    },
    {
        bullets: ['Distributed & Decentralized Architectures', 'Multi-Agent Co-learning', 'Hybrid Systems ( Symbolic + neural + emergent)', 'Meta-Learning & Lifelong Adaptation'],
    },
    {
        bullets: ['Cognitive Mirroring & Introspection: Using AI as a mirror for human thought', 'Philosophy of Artificial Consciousness: Ethical and Philosophical questions of intelligence', 'Sentience & Identity in Artificial Minds', 'Self-Awareness, Emergent Behavior & Self-Modeling', 'Understanding Human and Machine consciousness'],
    },
]
const Research = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Research Areas</h1>
        <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
            {/* Dynamic reusable Card with passed props since evry card has a different image,title, and link*/}
            <div>
                <ResearchCard image="/images/alike.png" eyebrow='Division' title="A.L.I.K.E" description="Co-evolution & Cognition: Becoming better, together." bullets={cards[0].bullets} linkText="Explore ALIKE" />
            </div>
            <div>
                <ResearchCard image="/images/align.png" eyebrow='Division' title="A.L.I.G.N" description="Alignment & ethics: Progress with purpose." bullets={cards[1].bullets} linkText="Explore ALIGN" />
            </div>
            <div>
                <ResearchCard image="/images/auris.png" eyebrow='Division' title="A.U.R.I.S" description="Empathy & Perception: Listening to both sides of intelligence." bullets={cards[2].bullets} linkText="Explore AURIS" />
            </div>
            <div>
                <ResearchCard image="/images/unite.png" eyebrow='Division' title="U.N.I.T.E" description="Collective systems: Intelligence that learns together." bullets={cards[3].bullets} linkText="Explore UNITE" />
            </div>
            <div>
                <ResearchCard image="/images/mirror.png" eyebrow='Division' title="The Mirror Institute" description="Consciousness & Reflection: Intelligence seeing itself." bullets={cards[4].bullets} linkText="Explore The Mirror Institute" />
            </div>
        </div>
    </div>
  );
};

export default Research;