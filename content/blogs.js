const t = (parts) => parts.join("");

const p = (text) => ({ type: "p", text });
const h2 = (text) => ({ type: "h2", text });
const ul = (items) => ({ type: "ul", items });
const bq = (text) => ({ type: "blockquote", text });

const BLOGS_SOURCE = [
  {
    id: "1",
    slug: "why-productivity-is-exhausting-us",
    category: "Work & Identity",
    date: "December 29, 2025",
    title: "Is it the work, or what the work our work is trying to do for us?",
    excerpt: t([
      "Work can feel good. You know that feeling. Finishing a project, closing the loop, crossing a finish ",
      "line, getting the room cleaned, pulling off an event—there is a deep satisfaction in effort that ",
      "lands somewhere inside the body as relief and pride at the same time.",
    ]),
    blocks: [
      p(
        t([
          "Work can feel good. You know that feeling. Finishing a project, closing the loop, crossing a ",
          "finish line, getting the room cleaned, pulling off an event—there is a deep satisfaction in ",
          "effort that lands somewhere inside the body as relief and pride at the same time. That “good tired” ",
          "carries a quiet dignity because it comes after something meaningful. The ache makes sense.",
        ]),
      ),
      p(
        t([
          "But something has shifted in the modern experience of work. Many of us still work hard, but the ",
          "tiredness no longer feels clean. It feels sticky. The day ends, but the mind keeps running. The ",
          "weekend arrives, but the heart stays braced. Even a vacation can turn into a slow detox from a pace ",
          "that has been normal for too long.",
        ]),
      ),
      p(
        t([
          "That is why it is not surprising to see how widespread depletion has become. In my book, I point ",
          "to a workforce stretched thin, with two-thirds of employees reporting they are overwhelmed, and ",
          "many describing emotional drain, chronic stress, and an inability to truly shut off—even during ",
          "downtime. The question is not whether we are tired. The question is why the tiredness feels so ",
          "total.",
        ]),
      ),
      p(
        t([
          "I began asking this question not for us, but for me.  I fell in love with industry, efficiency and ",
          "output, but the better I got, the better I did, the more tired I felt.",
        ]),
      ),
      p(
        t([
          "Twenty years ago, a phrase in a sermon struck me at a level that I hadn’t had words for before.  ",
          "This phrase stole from me the desire to see the problem on the surface; I learned that the issue is ",
          "not only the work, but also the work underneath the work.",
        ]),
      ),
      h2("The Hidden Engine Behind Exhaustion"),
      p(
        t([
          "Two people can do the same job, with similar hours and similar pressure, yet end the day very ",
          "differently. One finishes with a stable sense of self. The other ends the day feeling hollow, ",
          "anxious, or strangely ashamed. That difference is rarely explained by workload alone.",
        ]),
      ),
      p(
        t([
          "In the book, I frame this difference as an inner drive beneath the visible tasks—what motivates the ",
          "work and what the work is secretly trying to achieve. Abraham Kuyper helps name this “underneath” ",
          "dynamic in human work, and Dr. Timothy Keller gives it language many people immediately recognize: ",
          "the work underneath the work.",
        ]),
      ),
      p("Once you see it, you can’t unsee it."),
      p("Under that layer, work is no longer just work. Work becomes a strategy."),
      ul([
        "A strategy to earn approval.",
        "A strategy to hold identity together.",
        "A strategy to feel control.",
        "A strategy to outrun insecurity.",
        "A strategy to escape other realities.",
      ]),
      p(
        t([
          "When work becomes a strategy for the soul, it stops being a simple effort-and-rest rhythm. It ",
          "becomes a constant negotiation with fear and desire. That is why productivity can feel exhausting ",
          "even when life looks “successful.”",
        ]),
      ),
      h2("When Work Turns Into Identity"),
      p(
        t([
          "A quick cultural snapshot explains some of the pressure. In older societies, a person was known by ",
          "place or family line. Today, introductions often move quickly toward a single question: “What do you ",
          "do?” That question is not evil—but it does reveal something. It shows how the modern world sorts ",
          "people. Titles and output become shorthand for belonging.",
        ]),
      ),
      p(
        "Over time, it becomes easy to feel that work is not simply what you do during the day, but what makes you count.",
      ),
      p(
        t([
          "The problem with that arrangement is weight. Identity is heavy. Work cannot bear the freight of being ",
          "asked to prove worth. Once work becomes the defining feature of the self, every email, metric, ",
          "criticism, delay, rejection, or setback stops being a normal part of life and starts feeling like a ",
          "verdict.",
        ]),
      ),
      p(
        t([
          "In the book, I use the example of lawn work as a kind of tangible proof—lines in the grass you can ",
          "see—while much of human work is slow, relational, and hard to measure. Many of us live inside that ",
          "ache: the desire to see evidence that we matter.",
        ]),
      ),
      p(
        t([
          "When identity sits underneath the work, productivity is never “just helpful.” It becomes personal. ",
          "And that is why rest can start to feel undeserved, unsafe, or even lazy.",
        ]),
      ),
      h2("When Work Turns Into Control"),
      p(
        t([
          "The second layer underneath the work is control. I describe how weekend tasks can feel strangely ",
          "attractive—not because they are urgent, but because they offer something concrete to manage.",
        ]),
      ),
      p(
        t([
          "For many people, work becomes the one reliable lever in life. Family, health, relationships, ",
          "uncertainty, culture, and economics can feel ungovernable. Work feels like the place where effort ",
          "produces predictable results—at least for a while.",
        ]),
      ),
      p("That illusion matters."),
      p(
        t([
          "Because when that one “controllable” area becomes shaky—when plans fail, outcomes stall, influence ",
          "fades, or authority is questioned—the nervous system responds like a ship in a storm. The loss of ",
          "control can be deeply disorienting. Chasing the illusion again becomes exhausting, elusive, and ",
          "eventually contributes to burnout.",
        ]),
      ),
      p("At that point, productivity is no longer about excellence. It is about anxiety management."),
      ul([
        "The calendar fills because open space feels dangerous.",
        "The mind keeps rehearsing because uncertainty feels threatening.",
        "Rest becomes difficult—not because the body cannot stop, but because the heart believes it must not.",
      ]),
      h2("When Work Turns Into Insecurity"),
      p(
        t([
          "The third layer underneath the work is insecurity—the quiet fear that worth is fragile and must be ",
          "defended. In the book, I describe a moment when a mentor offered a line that reordered my inner ",
          "world:",
        ]),
      ),
      bq("“Christians always mix up their justification and their sanctification.”"),
      p(
        t([
          "The implication is both simple and sharp. When security comes from performance, the soul becomes ",
          "needy. Progress becomes proof. Productivity becomes a way to stay safe.",
        ]),
      ),
      p(
        t([
          "That is why approval and achievement are so exhausting. They are never settled. They can lift you for ",
          "a moment—then demand more the next day.",
        ]),
      ),
      p(
        t([
          "I push the logic further: when identity is tied to performance or approval, rest and peace become ",
          "bound to the same things. Approval gets to decide whether rest is allowed. Performance gets to decide ",
          "whether the mind can finally settle.",
        ]),
      ),
      p(
        t([
          "This is how people end up both overworking and under-resting, even when the schedule suggests “free ",
          "time.” The body is present at dinner, but the mind is still trying to earn something. You are home—but ",
          "the soul is still clocked in.",
        ]),
      ),
      h2("Why Blaming Ambition Misses the Point"),
      p(
        t([
          "A common reaction is to blame ambition. To assume the cure is to become less driven, less committed, ",
          "less invested. But I resist that move. The deeper issue is not ambition itself—it is what is powering ",
          "ambition, the story underneath the work.",
        ]),
      ),
      p(
        t([
          "The theology of the book insists that ambition and calling do not need to be erased in order to find ",
          "rest. God’s work in the world is wide-reaching. The problem is not meaningful effort. The problem is ",
          "when meaningful effort is driven by approval-hunger, identity panic, or control addiction instead of ",
          "grace and grounded purpose.",
        ]),
      ),
      p("That distinction matters. Because it means the goal is not to become passive."),
      p("The goal is to become free."),
      h2("A Quick Diagnostic: What Is the Work Trying to Earn?"),
      p("One simple way to apply this is to ask a single, honest question:"),
      p("What is my work secretly trying to earn right now?"),
      ul([
        "Approval from specific people?",
        "A sense of identity that feels solid?",
        "Control in a life that feels uncertain?",
        "Escape from pain, loneliness, disappointment, or fear?",
      ]),
      p("This question is not meant to shame you. It is meant to locate the engine."),
      p(
        t([
          "Once the engine is exposed, the pressure becomes clear. Exhaustion stops feeling mysterious. The ",
          "“always on” feeling becomes explainable. The cycle is no longer random—it has a logic.",
        ]),
      ),
      p(
        t([
          "This is what I have learned the hard way: work is good, but it makes a terrible god. When work becomes ",
          "the place where salvation is attempted—where identity, security, and control are chased—it becomes ",
          "heavier than it was ever designed to be.",
        ]),
      ),
      h2("A Simple Reset That Can Start Today"),
      p(
        t([
          "Healing takes time. But one small step can begin shifting the pattern: name the motive beneath the work ",
          "before the day ends.",
        ]),
      ),
      p("Take five minutes and write one sentence:"),
      bq("“The thing I have been trying to earn through work lately is ______.”"),
      p("Then write a second sentence—without drama, without condemnation:"),
      bq("“Work cannot carry that weight.”"),
      p("That is not the end of the journey. It is the beginning of clarity."),
      p("And clarity is one of the first forms of rest."),
      p(
        t([
          "Once the work beneath the work is brought into the light, productivity stops being a life-or-death ",
          "matter. Work can return to its proper place—meaningful, imperfect, human, and finally… something you ",
          "can set down.",
        ]),
      ),
      p(
        t([
          "Would you like to reflect on this topic over time? I would love for you to pick up my book here or ",
          "join me for a 21 Day Restoration Reset, a 21-day email campaign that gives you a daily reflection to ",
          "help you establish sustainable rhythms of work and rest.",
        ]),
      ),
    ],
  },
  {
    id: "2",
    slug: "burnout-or-spiritual-testing",
    category: "Discernment",
    date: "January 12, 2026",
    title: "Burnout or Testing: What is your weariness telling you?",
    excerpt: t([
      "“Burnout” has become the modern umbrella word for almost any kind of tiredness. Some days, we use it ",
      "to mean we are sick of routine. Other days, it describes feeling emotionally numb, spiritually dry, ",
      "and unable to keep going.",
    ]),
    blocks: [
      p(
        t([
          "“Burnout” has become the modern umbrella word for almost any kind of tiredness. Some days, we use it ",
          "to mean we are sick of routine. Other days, it describes feeling emotionally numb, spiritually dry, ",
          "and unable to keep going. The challenge is that the same label is used for very different ",
          "experiences, which can lead us to make rushed decisions that do not actually reflect what is ",
          "happening inside us.",
        ]),
      ),
      p(
        t([
          "I experienced what most would describe as a burnout and then spent years flirting with it like a moth ",
          "to a flame.  It became a lifelong journey of understanding that I didn’t have to live that way.",
        ]),
      ),
      p(
        t([
          "In my book, Rest for the Restless, I make a blunt observation: “Burnout” is not a word found in the ",
          "Bible. Yet the feelings people attach to it are real—and they deserve careful attention.",
        ]),
      ),
      p(
        t([
          "A premature burnout diagnosis can work like a switch. Once the word lands, the conclusion feels ",
          "final: Done. Walk away. Scrap it. I describe that mindset as dangerous because it can give us ",
          "permission to quit when a label is used too broadly—or even irresponsibly. A better approach is ",
          "slower and more honest: name what is actually going on before deciding how to respond.",
        ]),
      ),
      h2("The First Step: Name the Kind of Tired"),
      p(
        t([
          "Not all weariness comes from the same source. Sometimes fatigue is physical and medical. Sometimes it ",
          "is emotional depletion built up over months. Sometimes it is the weight of conflict. Sometimes it is ",
          "grief. Sometimes it is spiritual dryness. Often, it is a mix of all of it.",
        ]),
      ),
      p(
        t([
          "When someone is experiencing consistent physiological symptoms that affect sleep, appetite, and ",
          "desire, a doctor is the appropriate next step. That sentence matters to me because spiritual language ",
          "should never be used to ignore real physical warning signs. Discernment includes wisdom—not denial.",
        ]),
      ),
      p(
        t([
          "At the same time, I challenge our habit of calling everything “burnout” before asking better ",
          "questions. When someone feels depleted, the more accurate question might be what a friend’s parent ",
          "once asked:",
        ]),
      ),
      bq("“Are you burned out—or are you hurt?”"),
      p("That question opens a door. That question releases options"),
      ul([
        "Hurt needs healing.",
        "Depletion needs replenishment.",
        "Fear needs reassurance.",
        "Overload needs boundaries.",
        "Burnout might be present—but it might not be the whole story.",
      ]),
      h2("A Story That Mirrors Real Life"),
      p(
        t([
          "My friend’s situation does not begin with laziness or a lack of discipline. His life grows heavier in ",
          "a way many of us recognize: a high-pressure season at work, serious relational strain, leadership ",
          "conflict, and a looming family transition. Under board scrutiny, staff division, and the stress of a ",
          "new baby and a new home, he started running out of fuel.",
        ]),
      ),
      p(
        t([
          "He told me and others what was happening. We wanted to support him, so some called it burnout and ",
          "advised him to walk away. I do not paint those friends as villains. It is so easy to label pain ",
          "quickly—especially when someone is overwhelmed —and tempting i to reach for the simplest explanation.",
        ]),
      ),
      p("But his parents slowed things down. They listened. Then they introduced a better diagnostic process."),
      h2("The Pivot: “Burnout” Might Be a Signal, Not a Sentence"),
      p(
        t([
          "In Rest for the Restless I reflect on how what we call burnout may sometimes be something else in ",
          "disguise: a form of testing—not as punishment, but as strengthening.",
        ]),
      ),
      p(
        t([
          "I reframe the experience this way: what feels like an attack from circumstances may actually be a test ",
          "that reveals what is happening beneath the surface.",
        ]),
      ),
      p(
        t([
          "This does not deny that burnout exists. I am explicit about that. Burnout can happen. The distinction ",
          "is that the label should not end the conversation. It should begin one.",
        ]),
      ),
      h2("“Every Call Is Tested”: A Lens for Discernment"),
      p(
        "The book includes a formative line shared with me by a pastor that became a guiding principle:",
      ),
      bq("“Every call is tested.”"),
      p(
        t([
          "That statement is not meant to romanticize suffering. It is meant to normalize reality. Good things ",
          "face pressure. Callings get tested. Marriages get tested. Integrity gets tested. Faithfulness gets ",
          "tested: everything good gets tested.",
        ]),
      ),
      p(
        t([
          "Calling isn’t just for people in ministry. Parenthood is a calling. Being a student is a calling. A ",
          "rec softball player is called to bring their best. Being a human and stewarding our body and talents ",
          "is a calling.",
        ]),
      ),
      p(
        t([
          "In the book’s framing, testing often shows up in vulnerable moments. But the purpose is not ",
          "humiliation. God does not test to showcase failure. God tests so we can see His faithfulness.",
        ]),
      ),
      p(
        t([
          "That shift matters. Instead of asking, How do I get out of this as fast as possible? The better ",
          "question becomes, What is being revealed here, and what kind of faithfulness is being formed?",
        ]),
      ),
      h2("When Burnout Language Is Too Flat for a Complex Soul"),
      p(
        t([
          "One of my warnings is how burnout language can flatten reality. I note how broadly the term is ",
          "used—sometimes for mild frustration, sometimes for something deeply serious—and how, especially in ",
          "professional or ministry settings, it can land like a death sentence.",
        ]),
      ),
      p(
        "That is why I describe burnout language as functioning like a toggle switch: either burned out or not burned out. Finished or fine. No middle ground.",
      ),
      p(
        t([
          "What if we looked at it differently? Not a switch, but a dimmer. A person can be depleted and ",
          "vulnerable without being done. That framing protects us from making permanent decisions in the middle ",
          "of temporary exhaustion.",
        ]),
      ),
      h2("A Practical Discernment Checklist"),
      p(
        t([
          "Unfortunately, there is no three-step fix. The goal of Rest For the Restless is not to define burnout ",
          "or rush people toward solutions. The goal is to cast a vision for a life that remains ambitious while ",
          "being rooted in rest.",
        ]),
      ),
      p("Still, discernment needs handles. Here is a grounded place to begin."),
      ul([
        t([
          "Attending to our physiology is the spiritual priority If sleep, appetite, and desire are consistently ",
          "disrupted, take that seriously and seek medical support.  God has created our body. Attedning to it is ",
          "deeply spiritual.",
        ]),
        t([
          "Ask the “hurt vs. burnout” question. Hurt can look like burnout on the outside. My friend’s parents ",
          "asked the right diagnostic question: Are you burned out—or are you hurt?",
        ]),
        t([
          "Identify what is being tested. If every call is tested, then pressure does not automatically mean the ",
          "call is wrong. It may reveal an unhealthy way of carrying the calling.",
        ]),
        t([
          "Watch for reaction-based decisions. I describe two unhelpful paths: staying to prove something, or ",
          "leaving out of fear and bitterness. Both are reactions, not discernment.",
        ]),
        t([
          "Look underneath the label. My friend’s story raises the deeper question: was the work itself draining—or ",
          "was his way of doing the work draining life out of him? That question leads to inner work that lasts.",
        ]),
      ]),
      h2("Testing Does Not Mean Being Alone"),
      p(
        t([
          "We see this idea of testing throughout Scripture. God tests Abraham, Israel, and even Jesus—each time ",
          "revealing His faithfulness. Peter was sifted, according to Jesus’ words.  Jesus’ response was not ",
          "abandonment, but prayer and restoration.",
        ]),
      ),
      p(
        t([
          "Paul’s words offer a raw model of how testing can feel: pressure beyond ability, despair, and even the ",
          "sense of a “sentence of death”—followed by a renewed dependence on God.",
        ]),
      ),
      p(
        t([
          "The point is not to glorify suffering. The point is this: exhaustion is not always evidence of failure. ",
          "Sometimes it is the moment the soul learns it cannot run on itself.",
        ]),
      ),
      h2("What Weariness Might Be Trying to Teach You"),
      p("Weariness carries a message."),
      ul([
        "It might be telling you your body needs care.",
        "It might be pointing to hurt that needs attention.",
        "It might mean a calling is being tested.",
        "It might be revealing that the way the calling is being carried must change.",
      ]),
      p(
        t([
          "The danger is rushing to a single word and treating it like a final verdict. The healthier path is ",
          "discernment—slow enough to name what is real, honest enough to seek help when needed, and faithful ",
          "enough to trust that testing is not meant to break you, but to strengthen you for what is ahead.",
        ]),
      ),
      p(
        t([
          "Would you like to reflect on this topic over time? I would love for you to pick up my book here or ",
          "join me for a 21 Day Restoration Reset, a 21-day email campaign that gives you a daily reflection to ",
          "help you establish sustainable rhythms of work and rest.",
        ]),
      ),
    ],
  },
  {
    id: "3",
    slug: "sabbath-as-resistance",
    category: "Sabbath",
    date: "February 1, 2026",
    title: "Sabbath Rest: The quiet rebellion in a culture of constant motion",
    excerpt: t([
      "Modern life rarely needs to command us to stay busy. Pressure does that work quietly. Calendars fill ",
      "themselves. Notifications hum in the background. Expectations multiply without asking permission.",
    ]),
    blocks: [
      p(
        t([
          "Modern life rarely needs to command us to stay busy. Pressure does that work quietly. Calendars fill ",
          "themselves. Notifications hum in the background. Expectations multiply without asking permission. Even ",
          "days off can become performance spaces—packed with improvement projects, social obligations, and ",
          "self-imposed standards for how rest should look.",
        ]),
      ),
      p(
        t([
          "Against that backdrop, Sabbath can sound almost naïve. One full day set apart. No productivity goals. ",
          "No catching up. No optimization. Just rest, enjoyment, and presence. Yet in the book, I frame Sabbath ",
          "not as retreat or laziness, but as something far more provocative: an act of resistance.",
        ]),
      ),
      h2("Why Rest Feels So Hard Now"),
      p(
        t([
          "Many of us assume we struggle with rest because we are bad at it. I suggest something more ",
          "unsettling: rest feels difficult because modern systems quietly train us not to rest. The problem is ",
          "not a lack of discipline. It is a deep cultural pattern that treats output as identity and busyness ",
          "as virtue.",
        ]),
      ),
      p("I have learned this the hard way:"),
      ul(["A busy heart abhors an open spot on the calendar."]),
      p("Silence feels suspicious. Margin feels wasteful. White space feels risky."),
      p(
        t([
          "That reaction reveals something important. If rest feels threatening, it may be because it interrupts ",
          "the work beneath the work—the inner drive that needs to stay active to feel secure. Sabbath confronts ",
          "that drive directly.",
        ]),
      ),
      h2("The Original Shock of Sabbath"),
      p(
        t([
          "In the ancient world, the Sabbath was not a spiritual accessory. It was an economic and cultural ",
          "anomaly. Agricultural societies survived by maximizing labor. Crops waited for no one. Livestock ",
          "demanded constant care. And yet Israel was commanded to stop one day out of every seven.",
        ]),
      ),
      p(
        t([
          "That practice was intended to make them existentially different. While surrounding nations worked ",
          "without pause, Israel rested—and trusted that provision did not depend solely on endless effort. I ",
          "name the result boldly: they were invited to become the most well-rested people in the world.",
        ]),
      ),
      p("From the beginning, Sabbath was a declaration."),
      ul([
        "It said something about God.",
        "It said something about power.",
        "It said something about trust.",
      ]),
      p("And that declaration still carries weight."),
      h2("How Rest Became Complicated"),
      p(
        t([
          "Over time, Sabbath drifted from gift to burden. Rules multiplied. Boundaries tightened. By the time ",
          "Jesus entered the scene, the “day off” meant to restore people often left them even more exhausted. I ",
          "recount how religious leaders objected even to disciples eating grain or to healing on the Sabbath—",
          "turning rest into surveillance.",
        ]),
      ),
      p(
        t([
          "Jesus’ response was not subtle. He did not abolish the Sabbath. He reclaimed it. When He said, “The ",
          "Son of Man is Lord of the Sabbath,” He was claiming authority over rest itself.",
        ]),
      ),
      p(
        t([
          "In other words, the Sabbath was never meant to be a test of rule-keeping. It was meant to be a way of ",
          "life shaped by trust, enjoyment, and freedom.",
        ]),
      ),
      h2("Why Sabbath Is Resistance Today"),
      p(
        t([
          "Walter Bruegmann, in his beautiful little book, coined the phrase \"Sabbath as Resistance.\" Calling ",
          "Sabbath resistance can sound dramatic, but listen to what it offers. The Sabbath resists several ",
          "powerful cultural forces at once.",
        ]),
      ),
      ul([
        "It resists the idea that worth must be earned daily.",
        "It resists the belief that stopping will cause everything to fall apart.",
        "It resists the illusion that control comes from constant engagement.",
        "It resists the pressure to document, optimize, and monetize every moment.",
      ]),
      p(
        t([
          "Choosing not to work—even briefly—exposes the lie that life is held together by human effort alone. ",
          "That exposure can feel uncomfortable, even frightening, because it reveals how much meaning we have ",
          "attached to productivity.",
        ]),
      ),
      p("Sabbath quietly but firmly says: The world will keep turning without you."),
      p("I know this, but it still kind of shocks me when I recount it."),
      p("That truth is not diminishing."),
      p("It is freeing."),
      h2("Ceasing, Not Switching"),
      p(
        t([
          "One of the sharpest distinctions made in Rest for the Restless is between ceasing and switching. ",
          "Many of us think we are resting when we are simply redirecting effort—moving from paid work to ",
          "personal projects, from professional pressure to social performance, from obligation to curated ",
          "leisure.",
        ]),
      ),
      p("Sabbath is different. It is not about doing different work."),
      p("It is about relieving ourselves of the burdens of ambition."),
      p("That distinction matters because switching activities keeps the engine running. Ceasing turns it off."),
      p(
        t([
          "True rest requires learning to be present without producing, valuable without achieving, satisfied ",
          "without consuming, and loved without proving.",
        ]),
      ),
      h2("Enjoyment as a Spiritual Discipline"),
      p(
        t([
          "My suggestion is that from the earliest pages of the Bible, we should see that enjoyment is at the ",
          "center of the Sabbath. God’s rest after creation was not exhaustion—it was delight. God paused to ",
          "enjoy what had been made and called it very good.",
        ]),
      ),
      p(
        t([
          "Enjoyment, in this sense, is not indulgence. It is attentiveness. It is receiving the moment instead ",
          "of managing it. I describe it this way: enjoying the life you have, in the life you have, in the ",
          "place you have it.",
        ]),
      ),
      p(
        t([
          "That kind of enjoyment resists the constant pull toward elsewhere and later. It anchors us in the ",
          "present—where rest actually happens.",
        ]),
      ),
      h2("Why Sabbath Exposes the Heart"),
      p("A Sabbath way of life not only refreshes us. It reveals us."),
      p(
        t([
          "When work stops, inner narratives get louder. Anxiety surfaces. Guilt appears. Fear whispers. The mind ",
          "searches for something to fix, improve, or control.",
        ]),
      ),
      p("That discomfort is not failure."),
      p("It is information."),
      p(
        t([
          "Throughout the book, I show how the Sabbath confronts the work beneath the work—the need for approval, ",
          "identity, control, or escape. When those motives are named, rest becomes possible at a deeper level. ",
          "In that sense, Sabbath is not passive at all. It is honest.",
        ]),
      ),
      h2("Practicing Resistance in Small Ways"),
      p(
        t([
          "Sabbath does not begin with perfection. It begins with intention. I encourage practices that are ",
          "simple but quietly disruptive to unhealthy rhythms:",
        ]),
      ),
      ul([
        "Leaving open space on the calendar without filling it.",
        "Choosing presence over productivity for a set period.",
        "Refusing to measure the day by output.",
        "Ending the day with gratitude instead of evaluation.",
      ]),
      p("These practices may look small, but they retrain the heart."),
      h2("Rest That Strengthens Ambition"),
      p(
        t([
          "One of the most counterintuitive claims I make is that Sabbath rest does not weaken ambition—it ",
          "strengthens it. Rested people do not abandon purpose. They carry it more lightly. Ambition rooted in ",
          "rest becomes sustainable instead of frantic.",
        ]),
      ),
      p(
        t([
          "I hold two truths together: God has great ambitions for our lives, and those ambitions were never ",
          "meant to be driven by exhaustion.",
        ]),
      ),
      p("A Sabbath lifestyle, then, is not withdrawal from a meaningful life."),
      p("It is alignment to it."),
      h2("Choosing a Different Way"),
      p(
        t([
          "In a culture that celebrates constant motion, choosing rest becomes a quiet rebellion. It rejects the ",
          "idea that value must always be proven. It says no to fear-driven productivity. It says no to the lie ",
          "that stopping equals failure.",
        ]),
      ),
      p(
        t([
          "Sabbath is a form of resistance because it re-centers life around trust rather than pressure, ",
          "enjoyment rather than striving, and grace rather than performance.",
        ]),
      ),
      p(
        t([
          "And in a restless world, that resistance may be one of the most powerful practices we can reclaim.",
        ]),
      ),
    ],
  },
];

function normalizeSpaces(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function countWords(blocks) {
  const text = blocks
    .map((block) => {
      if (block.type === "p" || block.type === "h2" || block.type === "blockquote") return block.text;
      if (block.type === "ol" || block.type === "ul") return block.items.join(" ");
      return "";
    })
    .join(" ");

  const words = normalizeSpaces(text).split(" ").filter(Boolean);
  return words.length;
}

function readingTimeLabel(wordCount) {
  const minutes = Math.max(1, Math.round(wordCount / 220));
  return `${minutes} min read`;
}

export const BLOGS = BLOGS_SOURCE
  .map((blog) => {
    const wordCount = countWords(blog.blocks ?? []);
    return {
      ...blog,
      wordCount,
      readingTime: readingTimeLabel(wordCount),
    };
  })
  .sort((a, b) => Number(a.id) - Number(b.id));

export function getBlogById(id) {
  const value = String(id ?? "");
  return BLOGS.find((blog) => blog.id === value) ?? null;
}

export function getBlogBySlug(slug) {
  const value = String(slug ?? "");
  return BLOGS.find((blog) => blog.slug === value) ?? null;
}
