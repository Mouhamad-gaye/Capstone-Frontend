#The frontend implementation for the Capstone Project provides a responsive and interactive UI for event management, announcements, and user authentication.

#Resources 

#User authentication with JWT
#Role-based access control (admin & members)
#Dynamic event management
#CRUD functionality
#slick-react
#bootstrap
#React router
#react hooks (UseState, UseEffect, useNavigate)
#Css module

#Navigation

#HomePage (The HomePage component is the main landing page for Denver's Mouride Daara website. It presents key content such as a hero section with a carousel, mission statement, activities, and footer information.) 


Events(The EventPage component is designed to manage events, allowing users to view, create, update, and delete events. It is built using React and Axios to interact with a backend API.

useState and useEffect hooks to manage event data,
Upon loading the page, useEffect calls the backend API to retrieve events,

The createEvent function sends a POST request to the API, 

To modify an existing event, updateEvent sends a PUT request, 

When an event is created or updated, handleSubmit processes the form, 

The handleDelete allows admins to remove events.

Rendering the UI

Displays a list of events with conditional rendering for admin controls.

Provides a form for creating and editing events.
) 


Announcements (Same path as Event Page)

Activities(The Activity Page is showcaseing key activities of Mouridism. It provides video content, a photo gallery, and a list of major community activities, offering visitors an interactive way to learn about Mouride traditions.
Video Section: Embeds YouTube videos about Cheikh Ahmadou Bamba’s teachings and Mouride community events.

Photo Gallery: Displays images representing Mouride activities, such as prayer circles and community gatherings.

Activities List: Highlights key Mouride practices, including spiritual gatherings, educational programs, and pilgrimages.

CSS Styling: Uses an external stylesheet (Activity.module.css) for layout and styling.)
#Admin Panel (managing annoucements and events)

#Authentication
#SignUp/ Login (stores JWT in local storage)
Protected Routes (Only admins can modify content)



Backen Link (https://github.com/Mouhamad-gaye/Capstone-Backend.git)