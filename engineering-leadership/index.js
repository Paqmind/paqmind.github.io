const SERVER_URL = "https://api.devscanr.com"

const COLORS = {
  white: "#ffffff",
  indigo: {
    100: "#e5eafc",
    200: "#ced6f9",
    400: "#8a8dea",
    500: "#6e64dc",
    600: "#5b42cb",
  },
  purple: {
    200: "#e9d8f9",
    500: "#a257e0",
  },
  steel: {
    200: "#dee1eb",
    600: "#57506a",
    950: "#14101d",
  }
}
const THEME = {
  "themeName": "custom",
  "colorPalette": "light",
  "isPanelless": false,
  "backgroundImage": "",
  "backgroundImageFit": "cover",
  "backgroundImageAttachment": "scroll",
  "backgroundOpacity": 1,
  "cssVariables": {
    "--sjs-editorpanel-backcolor": "rgba(249, 249, 249, 1)",
    "--sjs-editorpanel-hovercolor": "rgba(243, 243, 243, 1)",
    "--sjs-questionpanel-backcolor": "rgba(255, 255, 255, 1)",
    "--sjs-questionpanel-hovercolor": "rgba(248, 248, 248, 1)",
    "--sjs-font-family": "Inter, sans-serif, sans-serif",
    "--sjs-font-size": "16px",
    "--sjs-corner-radius": "14px",
    "--sjs-base-unit": "8px",
    "--sjs-font-pagetitle-color": COLORS.steel["950"],
    "--sjs-font-pagedescription-color": COLORS.steel["600"],
    //"--sjs-shadow-small": `0px 2px 0px 0px ${COLORS.purple["200"]}`,
    "--sjs-font-questiontitle-color": COLORS.steel["950"],
    "--sjs-font-questiondescription-color": COLORS.steel["600"],
    "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-font-editorfont-color": COLORS.steel["950"],
    "--sjs-font-editorfont-placeholdercolor": COLORS.steel["600"],
    "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
    "--sjs-border-light": COLORS.steel["200"],
    "--sjs-general-backcolor": "rgba(0, 0, 0, 0)",
    "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
    "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
    "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": COLORS.steel["600"],
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": COLORS.steel["950"],
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-article-font-xx-large-textDecoration": "none",
    "--sjs-article-font-xx-large-fontWeight": "500",
    "--sjs-article-font-xx-large-fontStyle": "normal",
    "--sjs-article-font-xx-large-fontStretch": "normal",
    "--sjs-article-font-xx-large-letterSpacing": "-0.01em",
    "--sjs-article-font-xx-large-lineHeight": "64px",
    "--sjs-article-font-xx-large-paragraphIndent": "0px",
    "--sjs-article-font-xx-large-textCase": "none",
    "--sjs-article-font-x-large-textDecoration": "none",
    "--sjs-article-font-x-large-fontWeight": "500",
    "--sjs-article-font-x-large-fontStyle": "normal",
    "--sjs-article-font-x-large-fontStretch": "normal",
    "--sjs-article-font-x-large-letterSpacing": "-0.01em",
    "--sjs-article-font-x-large-lineHeight": "56px",
    "--sjs-article-font-x-large-paragraphIndent": "0px",
    "--sjs-article-font-x-large-textCase": "none",
    "--sjs-article-font-large-textDecoration": "none",
    "--sjs-article-font-large-fontWeight": "400",
    "--sjs-article-font-large-fontStyle": "normal",
    "--sjs-article-font-large-fontStretch": "normal",
    "--sjs-article-font-large-letterSpacing": "-0.01em",
    "--sjs-article-font-large-lineHeight": "40px",
    "--sjs-article-font-large-paragraphIndent": "0px",
    "--sjs-article-font-large-textCase": "none",
    "--sjs-article-font-medium-textDecoration": "none",
    "--sjs-article-font-medium-fontWeight": "400",
    "--sjs-article-font-medium-fontStyle": "normal",
    "--sjs-article-font-medium-fontStretch": "normal",
    "--sjs-article-font-medium-letterSpacing": "0",
    "--sjs-article-font-medium-lineHeight": "32px",
    "--sjs-article-font-medium-paragraphIndent": "0px",
    "--sjs-article-font-medium-textCase": "none",
    "--sjs-article-font-default-textDecoration": "none",
    "--sjs-article-font-default-fontWeight": "400",
    "--sjs-article-font-default-fontStyle": "normal",
    "--sjs-article-font-default-fontStretch": "normal",
    "--sjs-article-font-default-letterSpacing": "0",
    "--sjs-article-font-default-lineHeight": "28px",
    "--sjs-article-font-default-paragraphIndent": "0px",
    "--sjs-article-font-default-textCase": "none",
    "--sjs-general-backcolor-dim": "rgba(0, 0, 0, 0)",
    "--sjs-primary-backcolor": COLORS.indigo["400"],
    "--sjs-primary-backcolor-dark": COLORS.indigo["600"],
    "--sjs-primary-backcolor-light": COLORS.indigo["100"],
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    "--sjs-font-surveytitle-color": "lab(22.3856 6.54152 -11.4993)",
    "--sjs-font-surveytitle-weight": "520",
    "--sjs-font-surveytitle-letterSpacing": "-0.01",
    "--sjs-font-questiontitle-weight": "500"
  },

  "header": {
    "height": 0,
    "mobileHeight": 0,
    "inheritWidthFrom": "survey",
    "textAreaWidth": 0,
    "backgroundImageFit": "cover",
    "backgroundImageOpacity": 100,
    "overlapEnabled": false,
    "logoPositionX": "left",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom"
  },
  "headerView": "basic"
}

// Instantiate `markdown-it`
const converter = markdownit({
  html: true // Support HTML tags in the source (unsafe, see documentation)
})
//--------------------------------------------------------------------------------------------------

if (SURVEY_NAME) {
  const PAGE4 = {
    "name": "page4",
    // "title": "Leadership controversies",
    "elements": [
      {
        "type": "matrix",
        "name": "controversies",
        "title": "Leadership controversies",
        "columns": [
          "Agree 👍",
          "50/50 ⚖️",
          "Disagree 👎",
        ],
        "rows": [
          {
            "text": "For leaders, charisma matters more than competence",
            "value": "charisma"
          }, {
            "text": "Leaders should fully break with hands-on work and focus on larger things",
            "value": "focus-on-larger"
          }, {
            "text": "Leaders should be respected, not necessary liked",
            "value": "respected-vs-liked"
          }, {
            "text": "Conflict-avoidant people shouldn’t take leadership roles",
            "value": "conflict-avoidant"
          }, {
            "text": "A weak team with a strong leader outperforms a strong team with a weak leader",
            "value": "team-vs-lead"
          }
        ],
        // "columnMinWidth": "40px",
        "rowTitleWidth": "280px"
      }
    ]
  }
  const QUESTIONS = {
    "aspiring-leader": [{
      "name": "page1",
      "title": "Professional background",
      "elements": [{
        "type": "radiogroup",
        "name": "background",
        "isRequired": false,
        "title": "Your current role or main expertise",
        "choices": [
          "Software Engineer / Developer",
          "IT Infrastructure / Systems Engineer",
          "Data / Business Analyst",
          "Cybersecurity Engineer / Analyst",
          "QA / Test Automation Engineer",
          "Cloud / DevOps Engineer",
          "Data Scientist / ML Engineer",
          "Product/Project/Peoples Manager",
          "Solution / Systems Architect",
        ],
        "showOtherItem": true,
        "otherPlaceholder": "Please specify...",
        "otherText": "Other",
      },
        {
          "type": "slider",
          "name": "it-years-of-experience",
          "isRequired": false,
          "title": "Your experience in the IT field",
          "min": 0,
          "max": 10,
          "step": 1,
          "customLabels": [
            {
              "value": 0,
              "text": "0 years"
            }, {
              "value": 5,
              "text": "5 years"
            }, {
              "value": 10,
              "text": "10+  years"
            }
          ],
        },
        {
          "type": "boolean",
          "name": "informal-leadership-experience",
          "isRequired": false,
          "title": "Do you have an informal leadership experience"
        },
      ]
    },
      {
        "name": "page2",
        "title": "Goals and concerns",
        "elements": [{
          "type": "checkbox",
          "name": "goals",
          "isRequired": false,
          "title": "Your career goals in leadership",
          "description": "choose the top two",
          "choices": [
            "Step into my first leadership role",
            "Build influence and visibility in my company or industry",
            "Navigate major career change or transition",
            "Sharpen key skills (e.g. communication, strategic thinking)",
            "Gain practical leadership experience in projects or initiatives",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }, {
          "type": "checkbox",
          "name": "threats",
          "isRequired": false,
          "title": "Macro-level threats that concern you the most",
          "description": "choose the top two",
          "choices": [
            "AI & automation disrupting jobs and roles",
            "Geopolitical tensions, wars, sanctions",
            "Global economic downturns like inflation or recession",
            "Industry or domain volatility: disruptions, commoditization, etc.",
            "Environmental crises (pollution, climate, ...)",
            "Future pandemics or health crises",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }, {
          "type": "checkbox",
          "name": "obstacles",
          "isRequired": false,
          "title": "Main obstacles on your leadership track",
          "description": "choose the top two",
          "choices": [
            "Concerns about complexity and responsibility",
            "Imposter syndrome",
            "Lack of mentors or guidance",
            "Perfectionism",
            "Limited opportunities to practice leadership skills",
            "Work-life balance",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        },
        ]
      }, {
        "name": "page3",
        "title": "Leadership beliefs",
        "elements": [{
          "type": "radiogroup",
          "name": "leaders-come-from",
          "isRequired": false,
          "title": "Where the best leaders come from?",
          "choices": [
            "Top tech performers naturally make the best leaders.",
            "Best leaders come from non-technical roles like PM or BA.",
            "Leadership should be a whole team effort.",
            "A leader should be an outsider – for a fresh start.",
            "Anyone can become a leader with the right mindset and initiative.",
          ],
        }, {
          "type": "radiogroup",
          "name": "focus-of-leader",
          "isRequired": false,
          "title": "What should be the primary focus of a leader?",
          "choices": [
            "**Structure**<br/><small>Optimized systems and processes</small>",
            "**Team**<br/><small>People and internal relations</small>",
            "**Strategy**<br/><small>Vision and direction</small>",
            "**Execution**<br/><small>Getting things done effectively</small>",
            "**Profit**<br/><small>Managing resources and financial outcomes</small>",
            "**Adaptability**<br/><small>Responding quickly to change and uncertainty</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "red-flags",
          "isRequired": false,
          "title": "What’s the biggest red flag for a future leader?",
          "choices": [
            "**Lacks empathy**<br/><small>Ignores team struggles, overlooks how decisions impact people’s wellbeing</small>",
            "**Lacks accountability**<br/><small>Blames others or circumstances instead of owning mistakes and learning from them</small>",
            "**Overconfident**<br/><small>Dismisses risks and feedback, pushes ahead while downplaying consequences</small>",
            "**Poor communicator**<br/><small>Sends mixed messages, leaving teams confused and frustrated about goals and priorities</small>",
            "**Egocentric**<br/><small>Takes credit for successes but avoids responsibility when things go wrong</small>",
            "**Closed-minded**<br/><small>Rejects ideas or feedback that challenge their worldview or authority</small>",
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Please specify...",
          "otherText": "Other",
        }, {
          "type": "radiogroup",
          "name": "best-environment",
          "isRequired": false,
          "title": "What kind of environment would bring out your best leadership?",
          "choices": [
            "**Startup**<br/><small>Uncertainty is an opportunity, not a threat</small>",
            "**Scaleup**<br/><small>I’m growth-oriented and thrive in dynamic environments</small>",
            "**Enterprise**<br/><small>I choose complex systems and clear roles – aiming for long-term strategy and big impact</small>",
            "**Government**<br/><small>I like predictable systems, steady progress, and low-drama environments</small>",
            "**Other** (Non-profit or R&D)<br/><small>I’m a leader who excels in unconventional environments</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "ambitions",
          "isRequired": false,
          "title": "What drives your leadership ambitions?",
          "choices": [
            "**Legacy**<br/><small>Only what lasts truly matters</small>",
            "**Recognition**<br/><small>Influence means being visible</small>",
            "**Control**<br/><small>If you’re not making decisions, you’re not leading</small>",
            "**Responsibility**<br/><small>I do what needs to be done, however hard or thankless</small>",
            "**Curiosity**<br/><small>Driven by the thrill of discovery</small>",
            "**Momentum**<br/><small>Progress isn’t a means, it’s the goal</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "scares",
          "isRequired": false,
          "title": "What scares you out most in leadership?",
          "choices": [
            "**Disorganization**<br/><small>\"Creative chaos\" just isn’t for me</small>",
            "**Bureaucracy**<br/><small>Regulations and red tape sap energy the most</small>",
            "**Micromanagement**<br/><small>Drowning in excessive control and meaningless KPIs</small>",
            "**Toxic culture**<br/><small>Tensions and politics are the most damaging</small>",
            "**Inefficiency**<br/><small>Failed milestones tank momentum and morale</small>",
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Please specify...",
          "otherText": "Other",
        },
        ]
      }, PAGE4,
    ],
    "beginning-leader": [{
      "name": "page1",
      "title": "Professional background",
      "elements": [{
        "type": "radiogroup",
        "name": "background",
        "isRequired": false,
        "title": "Your background",
        "choices": [
          "Software Engineer / Developer",
          "IT Infrastructure / Systems Engineer",
          "Data / Business Analyst",
          "Cybersecurity Engineer / Analyst",
          "QA / Test Automation Engineer",
          "Cloud / DevOps Engineer",
          "Data Scientist / ML Engineer",
          "Product/Project/Peoples Manager",
          "Solution / Systems Architect",
        ],
        "showOtherItem": true,
        "otherPlaceholder": "Please specify...",
        "otherText": "Other",
      }, {
        "type": "text",
        "name": "title",
        "isRequired": false,
        "title": "Your title",
      }, {
        "type": "slider",
        "name": "it-years-of-experience",
        "isRequired": false,
        "title": "Your experience in the IT field",
        "min": 0,
        "max": 10,
        "step": 1,
        "customLabels": [
          {
            "value": 0,
            "text": "0 years"
          }, {
            "value": 5,
            "text": "5 years"
          }, {
            "value": 10,
            "text": "10+  years"
          }
        ],
      }, {
        "type": "slider",
        "name": "leadership-years-of-experience",
        "isRequired": false,
        "title": "Your current experience in leadership",
        "description": "<small>Do you have more than 3 years experience in leadership? " +
          "Please fill out <a href=\"../experienced\" class=\"underline\">this survey</a>.</small>",
        "min": 0,
        "max": 3,
        "step": 1,
        "customLabels": [
          {
            "value": 0,
            "text": "0 years"
          }, {
            "value": 1,
            "text": "1 year"
          }, {
            "value": 2,
            "text": "2 years"
          }, {
            "value": 3,
            "text": "3 years"
          }
        ],
      }
      ]
    },
      {
        "name": "page2",
        "title": "Goals and concerns",
        "elements": [{
          "type": "checkbox",
          "name": "goals",
          "isRequired": false,
          "title": "Your career goals in leadership",
          "description": "choose the top two",
          "choices": [
            "Grow into a more confident and effective leader",
            "Build influence and visibility in my company or industry",
            "Expand leadership scope or responsibilities",
            "Sharpen key skills (e.g. communication, strategic thinking)",
            "Strengthen decision-making under pressure",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }, {
          "type": "checkbox",
          "name": "threats",
          "isRequired": false,
          "title": "Macro-level threats that concern you the most",
          "description": "choose the top two",
          "choices": [
            "AI & automation disrupting jobs and roles",
            "Geopolitical tensions, wars, sanctions",
            "Global economic downturns like inflation or recession",
            "Industry or domain volatility: disruptions, commoditization, etc.",
            "Environmental crises (pollution, climate, ...)",
            "Future pandemics or health crises",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }, {
          "type": "checkbox",
          "name": "obstacles",
          "isRequired": false,
          "title": "Main obstacles on your leadership track",
          "description": "choose the top two",
          "choices": [
            "Managing increased complexity and responsibility",
            "Self-doubt in decision-making",
            "Limited access to mentors or peer support",
            "Struggling to delegate effectively",
            "Balancing leadership and hands-on work",
            "Work-life balance",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        },
        ]
      }, {
        "name": "page3",
        "title": "Leadership beliefs",
        "elements": [{
          "type": "radiogroup",
          "name": "leaders-come-from",
          "isRequired": false,
          "title": "Where the best leaders come from?",
          "choices": [
            "Top tech performers naturally make the best leaders.",
            "Best leaders come from non-technical roles like PM or BA.",
            "Leadership should be a whole team effort.",
            "A leader should be an outsider – for a fresh start.",
            "Anyone can become a leader with the right mindset and initiative.",
          ],
        }, {
          "type": "radiogroup",
          "name": "archetype",
          "isRequired": false,
          "title": "What is your leader archetype?",
          "choices": [
            "**The Architect**<br/><small>Without a plan, you’re just guessing.</small>",
            "**The Coach**<br/><small>Great people make great results.</small>",
            "**The Strategist**<br/><small>Set the direction, be bold – the rest will follow.</small>",
            "**The Operator**<br/><small>Ideas need action to succeed.</small>",
            "**The Capitalist**<br/><small>Profit speaks louder than promises.</small>",
            "**The Adapter**<br/><small>Change fast or get left behind.</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "red-flags",
          "isRequired": false,
          "title": "What’s the biggest red flag for a future leader?",
          "choices": [
            "**Lacks empathy**<br/><small>Ignores team struggles, overlooks how decisions impact people’s wellbeing</small>",
            "**Lacks accountability**<br/><small>Blames others or circumstances instead of owning mistakes and learning from them</small>",
            "**Overconfident**<br/><small>Dismisses risks and feedback, pushes ahead while downplaying consequences</small>",
            "**Poor communicator**<br/><small>Sends mixed messages, leaving teams confused and frustrated about goals and priorities</small>",
            "**Egocentric**<br/><small>Takes credit for successes but avoids responsibility when things go wrong</small>",
            "**Closed-minded**<br/><small>Rejects ideas or feedback that challenge their worldview or authority</small>",
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Please specify...",
          "otherText": "Other",
        }, {
          "type": "radiogroup",
          "name": "best-environment",
          "isRequired": false,
          "title": "What kind of environment brings out your best leadership?",
          "choices": [
            "**Startup**<br/><small>Uncertainty is an opportunity, not a threat</small>",
            "**Scaleup**<br/><small>I’m growth-oriented and thrive in dynamic environments</small>",
            "**Enterprise**<br/><small>I choose complex systems and clear roles – aiming for long-term strategy and big impact</small>",
            "**Government**<br/><small>I like predictable systems, steady progress, and low-drama environments</small>",
            "**Other** (Non-profit or R&D)<br/><small>I’m a leader who excels in unconventional environments</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "ambitions",
          "isRequired": false,
          "title": "What drives your leadership when no one’s watching?",
          "choices": [
            "**Legacy**<br/><small>Only what lasts truly matters</small>",
            "**Recognition**<br/><small>Influence means being visible</small>",
            "**Control**<br/><small>If you’re not making decisions, you’re not leading</small>",
            "**Responsibility**<br/><small>I do what needs to be done, however hard or thankless</small>",
            "**Curiosity**<br/><small>Driven by the thrill of discovery</small>",
            "**Momentum**<br/><small>Progress isn’t a means, it’s the goal</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "background",
          "isRequired": false,
          "title": "What wears you out most in leadership?",
          "choices": [
            "**Disorganization**<br/><small>\"Creative chaos\" just isn’t for me</small>",
            "**Bureaucracy**<br/><small>Regulations and red tape sap energy the most</small>",
            "**Micromanagement**<br/><small>Drowning in excessive control and meaningless KPIs</small>",
            "**Toxic culture**<br/><small>Tensions and politics are the most damaging</small>",
            "**Inefficiency**<br/><small>Failed milestones tank momentum and morale</small>",
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Please specify...",
          "otherText": "Other",
        },
        ]
      }, PAGE4,
    ],
    "experienced-leader": [{
      "name": "page1",
      "title": "Professional background",
      "elements": [{
        "type": "text",
        "name": "title",
        "isRequired": false,
        "title": "Your title",
      }, {
        "type": "slider",
        "name": "leadership-years-of-experience",
        "isRequired": false,
        "title": "Your current experience in leadership",
        "description": "<small>Do you have less than 3 years experience in leadership? " +
          "Please fill out <a href=\"../beginning\" class=\"underline\">this survey</a>.</small>",
        "min": 3,
        "max": 10,
        "step": 1,
        "customLabels": [
          {
            "value": 3,
            "text": "3 years"
            // }, {
            //   "value": 5,
            //   "text": "5 years"
            // }, {
            //   "value": 7,
            //   "text": "7 years"
          }, {
            "value": 10,
            "text": "10+ years"
          }
        ],
      }
      ]
    },
      {
        "name": "page2",
        "title": "Goals and concerns",
        "elements": [{
          "type": "checkbox",
          "name": "goals",
          "isRequired": false,
          "title": "Your next leadership goals",
          "description": "choose the top two",
          "choices": [
            "Move into an executive (C-suite) or board role",
            "Lead a large-scale transformation or growth effort",
            "Mentor and develop future leaders",
            "Grow industry influence / thought leadership",
            "Maintain energy & work–life balance while leading at scale",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }, {
          "type": "checkbox",
          "name": "threats",
          "isRequired": false,
          "title": "Macro-level threats that concern you the most",
          "description": "choose the top two",
          "choices": [
            "AI & automation disrupting jobs and roles",
            "Geopolitical tensions, wars, sanctions",
            "Global economic downturns like inflation or recession",
            "Industry or domain volatility: disruptions, commoditization, etc.",
            "Environmental crises (pollution, climate, ...)",
            "Future pandemics or health crises",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }, {
          "type": "checkbox",
          "name": "obstacles",
          "isRequired": false,
          "title": "Main obstacles on your leadership track",
          "description": "choose the top two",
          "choices": [
            "Navigating complex organizational politics",
            "Sustaining motivation and energy",
            "Limited opportunities for personal growth",
            "Leading through major change or crisis",
            "Retaining top talent",
            "Work-life balance",
          ],
          "colCount": 1,
          "maxSelectedChoices": 2,
          "showOtherItem": true,
        }]
      }, {
        "name": "page3",
        "title": "Leadership beliefs",
        "elements": [{
          "type": "radiogroup",
          "name": "leaders-come-from",
          "isRequired": false,
          "title": "Where the best leaders come from?",
          "choices": [
            "Top tech performers naturally make the best leaders.",
            "Best leaders come from non-technical roles like PM or BA.",
            "Leadership should be a whole team effort.",
            "A leader should be an outsider – for a fresh start.",
            "Anyone can become a leader with the right mindset and initiative.",
          ],
        }, {
          "type": "radiogroup",
          "name": "archetype",
          "isRequired": false,
          "title": "What is your leader archetype?",
          "choices": [
            "**The Architect**<br/><small>Without a plan, you’re just guessing.</small>",
            "**The Coach**<br/><small>Great people make great results.</small>",
            "**The Strategist**<br/><small>Set the direction, be bold – the rest will follow.</small>",
            "**The Operator**<br/><small>Ideas need action to succeed.</small>",
            "**The Capitalist**<br/><small>Profit speaks louder than promises.</small>",
            "**The Adapter**<br/><small>Change fast or get left behind.</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "red-flags",
          "isRequired": false,
          "title": "What’s the biggest red flag for a future leader?",
          "choices": [
            "**Lacks empathy**<br/><small>Ignores team struggles, overlooks how decisions impact people’s wellbeing</small>",
            "**Lacks accountability**<br/><small>Blames others or circumstances instead of owning mistakes and learning from them</small>",
            "**Overconfident**<br/><small>Dismisses risks and feedback, pushes ahead while downplaying consequences</small>",
            "**Poor communicator**<br/><small>Sends mixed messages, leaving teams confused and frustrated about goals and priorities</small>",
            "**Egocentric**<br/><small>Takes credit for successes but avoids responsibility when things go wrong</small>",
            "**Closed-minded**<br/><small>Rejects ideas or feedback that challenge their worldview or authority</small>",
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Please specify...",
          "otherText": "Other",
        }, {
          "type": "radiogroup",
          "name": "best-environment",
          "isRequired": false,
          "title": "What kind of environment brings out your best leadership?",
          "choices": [
            "**Startup**<br/><small>Uncertainty is an opportunity, not a threat</small>",
            "**Scaleup**<br/><small>I’m growth-oriented and thrive in dynamic environments</small>",
            "**Enterprise**<br/><small>I choose complex systems and clear roles – aiming for long-term strategy and big impact</small>",
            "**Government**<br/><small>I like predictable systems, steady progress, and low-drama environments</small>",
            "**Other** (Non-profit or R&D)<br/><small>I’m a leader who excels in unconventional environments</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "ambitions",
          "isRequired": false,
          "title": "What drives your leadership when no one’s watching?",
          "choices": [
            "**Legacy**<br/><small>Only what lasts truly matters</small>",
            "**Recognition**<br/><small>Influence means being visible</small>",
            "**Control**<br/><small>If you’re not making decisions, you’re not leading</small>",
            "**Responsibility**<br/><small>I do what needs to be done, however hard or thankless</small>",
            "**Curiosity**<br/><small>Driven by the thrill of discovery</small>",
            "**Momentum**<br/><small>Progress isn’t a means, it’s the goal</small>",
          ],
        }, {
          "type": "radiogroup",
          "name": "scares",
          "isRequired": false,
          "title": "What wears you out most in leadership?",
          "choices": [
            "**Disorganization**<br/><small>\"Creative chaos\" just isn’t for me</small>",
            "**Bureaucracy**<br/><small>Regulations and red tape sap energy the most</small>",
            "**Micromanagement**<br/><small>Drowning in excessive control and meaningless KPIs</small>",
            "**Toxic culture**<br/><small>Tensions and politics are the most damaging</small>",
            "**Inefficiency**<br/><small>Failed milestones tank momentum and morale</small>",
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Please specify...",
          "otherText": "Other",
        },
        ]
      }, PAGE4,
    ],
  }
  const SURVEY_DATA = {
    "title": "The evolving role of Engineering Leadership",
    "description": "We appreciate your time and contribution to this research.",
    // "questionStartIndex": "№1",
    // "requiredMark": "(*)",
    // "showQuestionNumbers": true,
    "pages": QUESTIONS[SURVEY_NAME],
    "showProgressBar": true,
    "progressBarType": "questions",
    "widthMode": "static",
    "width": "864px"
  }
  let survey = new Survey.Model(SURVEY_DATA)
  survey.applyTheme(THEME)
  survey.onComplete.add(saveSurveyResults)
  document.addEventListener("DOMContentLoaded", function () {
    survey.render(document.getElementById("surveyContainer"))
  })
  survey.onTextMarkdown.add((_, options) => {
    // Convert Markdown to HTML
    let str = converter.renderInline(options.text)
    // ...
    // Sanitize the HTML markup using a third-party library here
    // ...
    // Set HTML markup to render
    options.html = str
  })

  async function saveSurveyResults(sender, options) {
    options.showSaveInProgress()
    await fetch(SERVER_URL + "/saveSurveyResponse?batch=1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({0: {json: {name: SURVEY_NAME, data: JSON.stringify(sender.data)}}})
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not post the survey results")
        }
        options.showSaveSuccess()
        window.location.href = "../thank-you.html";
      })
      .catch(error => {
        options.showSaveError()
      })
  }
}

//--------------------------------------------------------------------------------------------------

if (SUBSCRIPTION_FORM !== "undefined") {
  const SUBSCRIPTION_DATA = {
    "title": "We appreciate your time and contribution to this research.",
    "pages": [{
      "name": "page1",
      "title": "Let’s stay connected!",
      "description": `Would you be interested in receiving our research results and useful resources for engineering leaders?`,
      "elements": [{
        "type": "panel",
        "name": "issue-report",
        elements: [{
          "type": "text",
          "name": "name",
          "isRequired": true,
          "title": "Your name",
        }, {
          "type": "text",
          "name": "email",
          "isRequired": true,
          "title": "Your email",
        }]
      }]
    }],
    // "showProgressBar": true,
    // "progressBarType": "questions",
    "widthMode": "static",
    "width": "864px",
    "completedHtml": "<h3>We will keep in touch!</h3>"
  }
  let subscription = new Survey.Model(SUBSCRIPTION_DATA)
  subscription.applyTheme(THEME)
  subscription.completeText = "Subscribe"
  subscription.onComplete.add(saveSubscriptionResults)
  document.addEventListener("DOMContentLoaded", function () {
    subscription.render(document.getElementById("subscriptionContainer"))
  })
  subscription.onTextMarkdown.add((_, options) => {
    // Convert Markdown to HTML
    let str = converter.renderInline(options.text)
    // ...
    // Sanitize the HTML markup using a third-party library here
    // ...
    // Set HTML markup to render
    options.html = str
  })

  async function saveSubscriptionResults(sender, options) {
    options.showSaveInProgress()
    await fetch(SERVER_URL + "/subscribe?batch=1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({0: {json: {name: sender.data.name, email: sender.data.email}}})
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not post the survey results")
        }
        options.showSaveSuccess()
      })
      .catch(error => {
        options.showSaveError()
      })
  }
}
