
export interface Author {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string; // reference to author id
  date: string;
  category: 'Stories' | 'Health' | 'Inspiration';
  readingTime: string;
  imageUrl: string;
  featured?: boolean;
}

export const authors: Author[] = [
  {
    id: "author-1",
    name: "Sarah Johnson",
    bio: "A mother of two who loves to share inspiring stories about motherhood and family life. When not writing, Sarah enjoys hiking and cooking with her children.",
    imageUrl: "/placeholder.svg",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "author-2",
    name: "Emma Williams",
    bio: "Professional writer and mother who focuses on health topics for families. Emma has a background in nutrition and is passionate about promoting wellness.",
    imageUrl: "/placeholder.svg",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    }
  }
];

export const articles: Article[] = [
  {
    id: "article-1",
    title: "The Unexpected Joy of Motherhood",
    excerpt: "Discover how one mother's journey through unexpected challenges revealed the most profound joys of motherhood.",
    content: `
      <p>When I first held my daughter in my arms, the world around me seemed to fade away. All the months of preparation, the anxiety, and the anticipation culminated in this single, perfect moment. But what I didn't realize then was how motherhood would transform me in ways I never imagined.</p>
      
      <p>The first few months were a blur of sleepless nights and adjustments. I found myself questioning everything—was I doing enough? Was I doing it right? The weight of responsibility felt enormous. But amidst the exhaustion and self-doubt, there were moments of pure joy that would catch me by surprise.</p>
      
      <p>I remember the first time my daughter smiled at me. It wasn't the reflexive newborn smile, but a genuine recognition. Her eyes locked with mine, and her face lit up with a grin that seemed to say, "I know you." In that moment, all the challenges seemed worth it.</p>
      
      <p>As she grew, so did the unexpected joys. The sound of her laughter echoing through our home. The way she reached for my hand when we walked together. The pride in her eyes when she accomplished something new. These small moments weren't the milestones I had been looking forward to, but they became the memories I treasured most.</p>
      
      <p>Motherhood taught me patience in a way nothing else could. It showed me strengths I didn't know I had and revealed vulnerabilities I needed to address. It wasn't always easy, and there were days when I felt overwhelmed. But even on the hardest days, there was always something—a hug, a smile, a small gesture—that reminded me of the incredible privilege it is to be called "Mom."</p>
      
      <p>The unexpected joy of motherhood isn't just in the big moments or celebrations. It's in the everyday routines, the quiet conversations, and the constant growth—both hers and mine. It's in learning to see the world through her eyes and rediscovering wonder in the simplest things.</p>
      
      <p>As I write this, my daughter is now in elementary school. The challenges have changed, but the unexpected joys continue. And I've learned that motherhood isn't a destination but a journey—one filled with surprises, growth, and a love deeper than I ever knew possible.</p>
    `,
    author: "author-1",
    date: "2025-04-01",
    category: "Stories",
    readingTime: "5 mins",
    imageUrl: "/placeholder.svg",
    featured: true
  },
  {
    id: "article-2",
    title: "Self-Care Rituals Every Mother Needs",
    excerpt: "Practical self-care practices that can help mothers maintain their well-being while balancing family responsibilities.",
    content: `
      <p>In the whirlwind of motherhood, self-care often becomes an afterthought. Between managing household responsibilities, caring for children, and possibly working outside the home, mothers frequently put themselves last on the priority list. However, self-care isn't selfish—it's essential for sustainable motherhood.</p>
      
      <p>As a health professional and mother, I've seen firsthand how neglecting self-care can lead to burnout, depression, and physical health issues. That's why I've compiled these essential self-care rituals that every mother needs.</p>
      
      <h3>Morning Mindfulness</h3>
      <p>Try to wake up 15 minutes before the rest of your household. Use this time for gentle stretching, meditation, or simply enjoying a cup of tea in silence. This small pocket of peace can set a positive tone for your entire day.</p>
      
      <h3>Movement as Medicine</h3>
      <p>Physical activity doesn't have to mean hour-long gym sessions. A 10-minute walk, a quick yoga sequence between tasks, or dancing with your children all count. Movement releases endorphins and provides a natural energy boost.</p>
      
      <h3>Nutritional Nurturing</h3>
      <p>While it's tempting to survive on your children's leftovers or grab whatever's quickest, prioritizing your nutrition is crucial. Prep simple, nutrient-dense snacks for yourself, and remember to stay hydrated throughout the day.</p>
      
      <h3>Connection Cultivation</h3>
      <p>Motherhood can feel isolating. Schedule regular check-ins with friends—even a 15-minute phone call can provide valuable support. Consider joining a mothers' group where you can share experiences with others who understand.</p>
      
      <h3>Micro-Moments of Joy</h3>
      <p>Identify small things that bring you joy and intentionally incorporate them into your day. Whether it's listening to a favorite song, applying a scented hand cream, or stepping outside to feel the sun on your face, these micro-moments can be powerful mood boosters.</p>
      
      <h3>Boundary Setting</h3>
      <p>Learning to say "no" to additional responsibilities when you're already stretched thin is a vital self-care skill. Set clear boundaries around your time and energy, and communicate these to family members and friends.</p>
      
      <h3>Sleep Sanctuary</h3>
      <p>While getting a full eight hours might seem impossible with young children, you can improve the quality of the sleep you do get. Create a relaxing bedtime routine, minimize screen time before bed, and make your bedroom a comfortable, peaceful environment.</p>
      
      <p>Remember, self-care looks different for everyone. The key is identifying what truly replenishes you and making these practices non-negotiable parts of your routine. By prioritizing your wellbeing, you're not only caring for yourself but modeling healthy behaviors for your children.</p>
      
      <p>In motherhood, as in air travel, it's essential to put on your own oxygen mask first. When you're nourished and recharged, you have more to give to those you love most.</p>
    `,
    author: "author-2",
    date: "2025-04-05",
    category: "Health",
    readingTime: "6 mins",
    imageUrl: "/placeholder.svg",
    featured: true
  },
  {
    id: "article-3",
    title: "Lessons My Mother Taught Me",
    excerpt: "A heartfelt reflection on the valuable life lessons passed down from mother to daughter across generations.",
    content: `
      <p>My mother wasn't perfect—no mother is. But in her imperfection and humanity, she taught me some of life's most valuable lessons. As Mother's Day approaches, I find myself reflecting on the wisdom she imparted, often without even realizing she was teaching.</p>
      
      <p>My mother grew up in a small rural town during a time when opportunities for women were limited. She had dreams of becoming a teacher, but family circumstances meant she started working immediately after high school. Despite this, she never showed bitterness. Instead, she channeled her teaching spirit into raising her children with intentionality and wisdom.</p>
      
      <h3>Resilience Through Action</h3>
      <p>When challenges arose, my mother wasn't one for lengthy pep talks. Instead, she showed me resilience through her actions. When we faced financial hardship after my father's job loss, she took on extra work without complaint. "We'll get through this," she'd say simply, and then she'd show us how. She taught me that resilience isn't about avoiding difficulty but moving forward despite it.</p>
      
      <h3>The Power of Small Kindnesses</h3>
      <p>My mother believed in what she called "everyday goodness." She always kept homemade soup in the freezer for sick neighbors. She remembered birthdays with handwritten notes long after others switched to quick text messages. She taught me that consistently showing up in small ways builds a lifetime of meaningful connections.</p>
      
      <h3>Finding Joy in Creation</h3>
      <p>Our home was modest, but my mother made it beautiful. She'd rearrange furniture instead of buying new pieces, plant flowers from seeds rather than purchasing mature plants, and transform leftover fabric into colorful quilts. "You don't need much to create beauty," she'd tell me. She taught me creativity isn't limited by resources but expanded by imagination.</p>
      
      <h3>The Dignity of Work</h3>
      <p>No task was beneath my mother. She approached each responsibility—whether managing household finances or scrubbing floors—with equal dedication. "Any job worth doing is worth doing well," was her mantra. She showed me that dignity comes not from what you do but how you do it.</p>
      
      <h3>Listening Without Fixing</h3>
      <p>As a teenager, I'd come to her with problems, anticipating advice. Instead, she'd often just listen. "Sometimes people don't need solutions," she told me once. "They just need to know someone cares enough to hear them." This lesson has served me well in my own relationships.</p>
      
      <h3>Strength in Vulnerability</h3>
      <p>Unlike many parents of her generation, my mother wasn't afraid to apologize when she was wrong or admit when she didn't know something. She showed me that vulnerability isn't weakness but a different kind of strength—one that builds trust and authenticity.</p>
      
      <p>Now as an adult, I find myself channeling my mother in everyday moments. When I write a thank-you note instead of sending a text, I hear her voice. When I listen to a friend without immediately offering advice, I'm practicing what she modeled. When I face challenges with quiet determination, I'm drawing on her strength.</p>
      
      <p>The greatest lessons my mother taught me weren't delivered in formal instructions but lived out daily before my eyes. Her legacy isn't in grand achievements but in the values she instilled through consistent example.</p>
      
      <p>As Mother's Day approaches, I'm grateful not just for what my mother gave me, but for what she showed me—about resilience, kindness, creativity, dignity, listening, and vulnerability. These aren't lessons learned once, but wisdom I continue to grow into with each passing year.</p>
    `,
    author: "author-1",
    date: "2025-04-10",
    category: "Inspiration",
    readingTime: "7 mins",
    imageUrl: "/placeholder.svg",
    featured: true
  },
  {
    id: "article-4",
    title: "Balancing Motherhood and Career",
    excerpt: "Strategies and insights for mothers navigating the challenges of building a career while raising a family.",
    content: `
      <p>The modern working mother often feels like she's living two full-time jobs simultaneously. While juggling professional responsibilities and family needs, many of us experience both the fulfillment of pursuing our career passions and the guilt that comes with divided attention. After fifteen years navigating this balance—and many conversations with other working mothers—I've gathered insights that might help those walking this challenging but rewarding path.</p>
      
      <h3>Redefine Success</h3>
      <p>Perhaps the most important shift I've made is redefining what success means. Rather than striving for perfection in all areas, I've learned to identify my core values and let them guide my decisions. Success isn't maintaining a spotless home while excelling at work and attending every school event—it's being intentional about what matters most in each season.</p>
      
      <h3>Build Your Support Network</h3>
      <p>No working mother thrives without support. This might mean a partner who equally shares parenting responsibilities, family members who help with childcare, or paid help if it's financially viable. Beyond practical support, cultivate relationships with other working mothers who understand your challenges. These connections provide valuable emotional support and practical advice.</p>
      
      <h3>Set Boundaries and Communicate Them Clearly</h3>
      <p>Learning to say "no" has been critical to my wellbeing. At work, this might mean declining projects that would require excessive travel or setting limits on after-hours availability. At home, it might mean accepting that not every school activity requires your presence or that some household tasks can remain undone. Once you've established boundaries, communicate them clearly to employers, colleagues, and family members.</p>
      
      <h3>Embrace Flexibility and Technology</h3>
      <p>If possible, seek employment that offers flexibility in hours or location. Many companies now recognize that flexibility increases productivity and retention, especially for working parents. Additionally, leverage technology that can streamline both work and home responsibilities—whether that's collaboration software for remote work or meal planning apps to simplify family dinners.</p>
      
      <h3>Practice Presence</h3>
      <p>When you're with your children, be fully present. Put away your phone, close your laptop, and engage completely. Similarly, when you're working, focus on the task at hand rather than worrying about home. This "compartmentalization" can reduce the mental load of constant task-switching and help you be more effective in both roles.</p>
      
      <h3>Let Go of Comparison</h3>
      <p>Social media makes it easy to compare ourselves to other mothers who seem to be handling everything effortlessly. Remember that these curated glimpses rarely show the whole picture. Every family's situation is unique, and the choices that work for others may not be right for you.</p>
      
      <h3>Involve Your Children</h3>
      <p>As your children grow, allow them appropriate insight into your work. This doesn't mean burdening them with adult concerns, but rather helping them understand what you do and why it matters to you. This can help them develop respect for your time and pride in your accomplishments.</p>
      
      <p>The balance between motherhood and career is rarely perfect, and it changes as your children grow and your career evolves. There will be seasons when work demands more attention and others when your family needs should take priority. The goal isn't perfect balance every day but rather a meaningful integration of these important parts of your identity over time.</p>
      
      <p>Remember that by pursuing both motherhood and career, you're modeling for your children that women can have multifaceted lives and contribute to their families and society in diverse ways. This may be one of the most valuable lessons they learn from you.</p>
    `,
    author: "author-2",
    date: "2025-04-15",
    category: "Inspiration",
    readingTime: "8 mins",
    imageUrl: "/placeholder.svg",
    featured: false
  },
  {
    id: "article-5",
    title: "Mother-Daughter Cooking Traditions",
    excerpt: "How sharing recipes and cooking together creates lasting bonds between mothers and daughters across generations.",
    content: `
      <p>In my family, recipes are more than instructions for preparing food—they're stories, histories, and connections that span generations. The kitchen has always been the heart of our home, and it's where I forged the strongest bonds with both my mother and grandmother. Now, as I cook alongside my own daughter, I'm aware of how these simple acts of measuring, mixing, and tasting together create threads that connect us across time.</p>
      
      <p>My earliest memories involve standing on a step stool beside my grandmother as she prepared Sunday dinner. "Cooking is love made visible," she would say as she showed me how to knead dough with the heels of my hands or how to tell when the chicken was perfectly done. From her, I learned that cooking isn't just about following recipes but about using all your senses—listening for the right sizzle, watching for the perfect color, feeling when dough has the right consistency.</p>
      
      <p>My mother expanded these lessons. A working mother in an era when that was less common, she taught me shortcuts and adaptations. "Recipes are guidelines, not gospel," she would say as she substituted ingredients based on what we had available or modified techniques to fit our busy schedules. From her, I learned flexibility and innovation in the kitchen.</p>
      
      <h3>Recipes as Family History</h3>
      <p>In my family, we don't just pass down recipes—we pass down the stories attached to them. My grandmother's pie crust recipe card includes notes about how she learned it from her mother during the Depression when butter was scarce. My mother's spaghetti sauce recipe comes with the tale of how she adapted it after tasting something similar on her honeymoon in Italy.</p>
      
      <p>These stories preserve not just culinary techniques but family history. When I make my grandmother's Christmas cookies, I'm not just creating something sweet—I'm continuing a tradition that started during World War II when sugar was rationed, and my great-grandmother had to save her allotment for weeks to make holiday treats.</p>
      
      <h3>Kitchen Conversations</h3>
      <p>Something magical happens when women work side by side in a kitchen. The rhythm of chopping, stirring, and tasting creates a space where conversation flows naturally. Some of the most important discussions I've had with my mother happened while we prepared meals together.</p>
      
      <p>It was while rolling out pie dough that she first told me about her challenges balancing work and motherhood. It was while stirring soup that she shared her wisdom about marriage. And it was while washing dishes together that we navigated some of our most difficult mother-daughter conflicts.</p>
      
      <h3>Creating New Traditions</h3>
      <p>Now, as I cook with my twelve-year-old daughter, I'm conscious of both preserving traditions and creating new ones. She has little interest in some family classics but has developed her own specialties—her pancake recipe is already better than mine, and she's mastered a chocolate cake that's becoming requested at every family gathering.</p>
      
      <p>I've learned to step back and let her experiment, even when it means flour covering every surface of the kitchen or recipes that don't quite turn out as planned. These mishaps often lead to our best laughs and most memorable moments.</p>
      
      <p>We've also adapted traditions to reflect our changing world. We've modified family recipes to accommodate friends with food allergies. We've incorporated techniques and flavors from cultures we've learned about through my daughter's friends and our travels. And we've embraced technology—my daughter keeps our family recipes on a digital app, complete with photos and her own notes.</p>
      
      <p>Yet some things remain constant. We still pull out the handwritten recipe cards on special occasions. We still use my grandmother's cast iron skillet, now seasoned with nearly a century of use. And we still believe that cooking together is about much more than preparing food.</p>
      
      <p>In a world of fast food and meal delivery services, the simple act of cooking together has become even more precious. It's a time to disconnect from screens, to use our hands for creating rather than typing, and to focus fully on each other and the sensory experience we're sharing.</p>
      
      <p>Whether you're preserving old traditions or creating new ones, I encourage all mothers and daughters to find time to cook together. The meals you create will nourish your bodies, but the memories you make will nourish your relationship for years to come.</p>
    `,
    author: "author-1",
    date: "2025-04-20",
    category: "Stories",
    readingTime: "7 mins",
    imageUrl: "/placeholder.svg",
    featured: false
  },
  {
    id: "article-6",
    title: "Nurturing Emotional Intelligence in Children",
    excerpt: "How mothers can help their children develop healthy emotional awareness and relationship skills from an early age.",
    content: `
      <p>As a child psychologist and mother of three, I've witnessed firsthand how a mother's approach to emotions shapes a child's emotional intelligence. In both my professional and personal experience, I've found that emotionally intelligent children become adults who navigate relationships more successfully, handle stress more effectively, and generally lead more fulfilling lives.</p>
      
      <p>Emotional intelligence—the ability to recognize, understand, and manage our own emotions and recognize, understand and influence the emotions of others—isn't fixed at birth. It's a set of skills that can be cultivated from the earliest years, and mothers play a crucial role in this development.</p>
      
      <h3>Name It to Tame It</h3>
      <p>Children experience complex emotions long before they have the vocabulary to express them. When we help children name their feelings ("It seems like you're feeling frustrated because your tower kept falling"), we're teaching emotional literacy—the foundation of emotional intelligence.</p>
      
      <p>Rather than dismissing emotions ("You're fine" or "Don't cry"), acknowledge them while providing the language your child needs. This validation helps children understand that all emotions are acceptable, even when certain behaviors aren't.</p>
      
      <h3>Model Emotional Awareness</h3>
      <p>Children learn about emotions by watching how we handle our own. When you're experiencing strong feelings, narrate your internal process: "I'm feeling disappointed that our plans changed. I'm going to take some deep breaths and think about what we can do instead."</p>
      
      <p>This doesn't mean burdening children with adult problems or displaying unregulated emotions. Rather, it means demonstrating healthy ways to recognize and manage feelings.</p>
      
      <h3>Create a Safe Emotional Environment</h3>
      <p>Children develop emotional intelligence when they feel safe expressing all emotions—not just the pleasant ones. Avoid phrases like "big boys don't cry" or "be a brave girl" that suggest certain emotions are unacceptable.</p>
      
      <p>Instead, create an environment where children know their feelings will be met with empathy rather than judgment. This doesn't mean permitting all behaviors—you can set firm limits while still acknowledging the emotions behind the behavior: "I understand you're angry, but hitting is not okay. Let's find another way to express that anger."</p>
      
      <h3>Teach Emotional Regulation Strategies</h3>
      <p>Self-regulation—the ability to manage emotions—isn't innate; it's learned. Help children develop a toolkit of strategies for handling big feelings: deep breathing, counting to ten, physical activity, quiet time, or creative expression through art or music.</p>
      
      <p>Different strategies work for different children, so observe what helps your child return to a calm state. Practice these techniques during calm times so they become familiar tools your child can access when emotions are running high.</p>
      
      <h3>Develop Empathy Through Perspective-Taking</h3>
      <p>Empathy—understanding and sharing the feelings of another—is a cornerstone of emotional intelligence. Encourage perspective-taking through simple prompts: "How do you think your friend felt when that happened?" or "What might make someone act that way?"</p>
      
      <p>Books and stories provide excellent opportunities to discuss others' feelings and motivations. Ask questions about characters' emotions and the reasons behind their actions.</p>
      
      <h3>Address Conflict as an Opportunity</h3>
      <p>While it's tempting to step in and resolve conflicts between children, these situations provide valuable opportunities to develop emotional intelligence. Guide children through conflict resolution by helping them identify their feelings, listen to each other, and work toward solutions.</p>
      
      <p>These skills transfer to adult relationships, where the ability to navigate disagreements respectfully becomes essential for personal and professional success.</p>
      
      <h3>Practice Patience and Self-Compassion</h3>
      <p>Nurturing emotional intelligence is ongoing work that requires patience—both with your child and yourself. There will be days when everyone's emotional regulation skills are tested. These moments aren't failures but opportunities for growth and learning.</p>
      
      <p>By approaching emotional development with intention and consistency, mothers give their children tools that will serve them throughout their lives. In a world increasingly focused on academic and technological skills, the ability to understand and manage emotions remains perhaps the most important predictor of lifelong happiness and success.</p>
    `,
    author: "author-2",
    date: "2025-04-25",
    category: "Health",
    readingTime: "6 mins",
    imageUrl: "/placeholder.svg",
    featured: false
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getRecentArticles = (): Article[] => {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
