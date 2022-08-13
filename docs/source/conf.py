# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'PolyPhy'
copyright = '2022, PolyPhy'
author = 'PolyPhy'

import os 
import sys
sys.path.insert(0, os.path.abspath('.'))
# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [  'sphinx_design',
                'sphinx.ext.autodoc',
                'sphinx.ext.napoleon']

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']
html_css_files = [
    'custom.css'
]

html_theme_options = {
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/PolyPhyHub",
            "icon": "fab fa-github-square",
        },
        {
            "name": "Slack",
            "url": "https://join.slack.com/t/polyphy/shared_invite/zt-1dn8qqkw2-wzf42hlKcCQb2snqArb2YQ",
            "icon": "fab fa-slack",
        },
        {
            "name": "Twitter",
            "url": "https://twitter.com",
            "icon": "fab fa-twitter",
        }
   ]
}

