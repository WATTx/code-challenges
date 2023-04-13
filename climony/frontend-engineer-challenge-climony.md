# climony Front-End Engineer Challenge

Hello and welcome to the code challenge for the frontend engineer position at climony.
Please read this document carefully before you start your assessment. The instructions and information you can find in the wattx [root readme](/README.md) of this repository remain valid for this challenge.

## Overview

The Task: Create an expo based react-native app that is covering following parts:

1. [Basic Architecture requirements](#1-basic-architecture-requirements)
2. [UX/UI requirements](#2-uxui-requirements)
   - 2.1 [Verstehen Overview (1) Screen](#21-verstehen-overview-1-screen)
   - 2.2 [Category Overview (2) Screen](#22-category-overview-2-screen)
   - 2.3 [Bonus: Article Slides (1) + Article Slides (2)](#23-bonus-screens-3-article-slides-1--article-slides-2)
3. [API integration](#3-api-integration)

### 1. Basic Architecture requirements

- React-Native
- Expo: Please scaffold your react-native app with expo (managed) version 47+ to make it easy for yourself and us - your app needs to run inside Expo Go.
- UI: You are free to choose any UI library of your choice or build custom components
- State Management: If needed, feel free to pick what suits you the best, may it be Reacts useContext, Redux, or something you always wanted to try out
- TypeScript: Use it if you feel comfortable with it. No requirement.

General advice:
We will review and test your app on either an (virtual/real) Android device or iOS device. Ensure your app runs on both properly.
Keep the general instructions written in our [root readme](/README.md) in mind.

### 2. UX/UI requirements

With the link to this code challenge, you should have gotten a link the Figma design file, too. If this was not the case, please contact us.

**Your task:** Build the screen designs and flows and stay as close as possible to the following designs. You can find a more profound description for the different screens below:

---

#### 2.1 **"Verstehen Overview (1)" Screen:**

- The screen consists of two content sections:
  - Section 1: a static title and description (please get it from Figma)
  - Section 2: contains a card row
    - The card row need to be horizontally scrollable: The user can swipe left to scroll right and swipe right to scroll left.
    - Every card contains an image, a title and an icon.
    - The user can press on the first card. The other cards should be disabled. Via pressing on the card, the user gets to a new screen, the category overview screen.
- The screen contains a bottom navigation. Only "Verstehen" tab should be enabled and touchable.

---

#### 2.2 **"Category Overview (2)" Screen:**

- The screen contains a top bar that is colored in the category highlight color (see Figma) and contains an icon, a category title and a back button. By pressing on the back button, the user gets to the Overview Screen (1).
- The screen contains a category title and description.
- The screen contains cards a scrollable list (top to down) that allows to scroll.
- Every card contains an image (please use a placeholder image if no image is given), a title, a short description and a reading time indication.
- The user can press on the first card. Via pressing on the card the user gets to a new screen: The Detail Screen (3). The other cards touch functionality should be disabled.
- The screen contains a bottom navigation.

---

#### 2.3 **🦄 BONUS Screens (3): "Article Slides (1)" + "Article Slides (2)":**

**IMPORTANT NOTE**
Those are bonus screens. If you feel like it, you can present us your implementation for the bonus screens. It is not required.

- Both screens contain a top bar that is colored in the category highlight color and contains an icon, category title and a back button. By pressing on the back button, the user gets to the "Category Overview (2)" Screen.
- Both screens contain a pagination indication that adjusts automatically.
- The "Article Slides (1)" screen contains an image (please use a placeholder image if API is not responding it), a title, a reading time indication, a date and a description.

- Both screens are swipeable:
  - If the user swipes to the left, he will get to the "Article Slides (2)" screen, that shows a view with an "The End" image.
  - If the user swipes back to the right, he will get back to the "Article Slides (1)" screen.
  - The pagination component needs to adjust automatically.

---

### 3. API integration

In the `/server` directory, you will find a fairly easy mocked mini service with endpoints you are expected to consume in your app for the various screens.

The service offers 3 endpoints:

- `/topics`: list of topics
- `/topics/$categoryId`: details for a specific topic $categoryId
- `/topics/$categoryId/$articleId`: details for a specific article with $articleId in a category

You can install & run the service via:

1. `npm install`
2. `node index`

The service should now work on your local machine via (e.g.):
`http://localhost:3001/topics`
