var React = require(`react`);
var ga = require('react-ga');
import { FormattedHTMLMessage } from 'react-intl';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  propTypes: {
    submitButtonText: React.PropTypes.string,
    formName: React.PropTypes.string,
    onSubmission: React.PropTypes.func,
    dataToPrefill: React.PropTypes.object
  },
  mixins: [require(`react-addons-linked-state-mixin`)],
  getInitialState() {
    return {
      isSubmitting: false,
      didSignUp: false,
      email: ``,
      country: ``,
      name: ``,
      formPrefilled: false
    };
  },
  componentDidMount: function() {
    this.refs.name.focus();
  },
  componentDidUpdate: function(prevProps, prevState) {
    var dataToPrefill = this.props.dataToPrefill;
    if ( dataToPrefill && !this.state.formPrefilled ) {
      this.setState({
        country: dataToPrefill.country ? dataToPrefill.country.toUpperCase() : "",
        email: dataToPrefill.email ? dataToPrefill.email : "",
        formPrefilled: true
      });
    }
  },
  getDefaultProps() {
    return {
      formName: "form"
    };
  },
  sendEmailToBasket: function(e) {
    e.preventDefault();
    if (this.state.isSubmitting) {
      return;
    }
    this.setState({
      isSubmitting: true
    });
    var request = new XMLHttpRequest();
    var lang = `en`;
    var url = process.env.BASKET_URL;
    var newsletters = `mozilla-foundation`;
    var sourceURL = encodeURIComponent(`https://advocacy.mozilla.org/encrypt`);
    var email = this.state.email;
    var country = this.state.country;
    var firstName = this.state.name;
    var params = `newsletters=` + newsletters + `&source_url=` + sourceURL + `&lang=` + lang + `&email=` + email + `&trigger_welcome=N`;

    if (country) {
      params += `&country=` + country;
    }
    if (firstName) {
      params += `&first_name=` + firstName;
    }

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          // Optimizely conversion tracking
          window.optimizely = window.optimizely || [];
          window.optimizely.push(['trackEvent', 'advocacysignup']);
          ga.event({ category: "Signup", action: "Submitted the form" });
          this.setState({
            didSignUp: true
          });
          if (this.props.onSubmission) {
            this.props.onSubmission();
          }
        } else {
          ga.event({ category: "Signup", action: "Form submit failed" });
          console.log(request.statusText);
          // FIXME: Do something if form submit failed
        }
      }
    };
    request.open(`POST`, url);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
  },
  render: function() {
    var submitButtonText = this.props.submitButtonText || this.context.intl.formatMessage({id: "sign_up"});
    return (
      <div className="encrypt-signup">
        {this.props.children}
        <form className="signupForm" id={this.props.formName} onSubmit={this.sendEmailToBasket}>
          <select className="country-input" valueLink={this.linkState(`country`) }>
            <option value="" disabled defaultValue="selected">
              {this.context.intl.formatMessage({id: 'select_your_country'})}
            </option>
            <option value="US">
              United States
            </option>
            <option value="AF">
              Afghanistan
            </option>
            <option value="AL">
              Albania
            </option>
            <option value="DZ">
              Algeria
            </option>
            <option value="AS">
              American Samoa
            </option>
            <option value="AD">
              Andorra
            </option>
            <option value="AO">
              Angola
            </option>
            <option value="AI">
              Anguilla
            </option>
            <option value="AG">
              Antigua and Barbuda
            </option>
            <option value="AR">
              Argentina
            </option>
            <option value="AM">
              Armenia
            </option>
            <option value="AW">
              Aruba
            </option>
            <option value="AU">
              Australia
            </option>
            <option value="AT">
              Austria
            </option>
            <option value="AZ">
              Azerbaijan
            </option>
            <option value="BS">
              Bahamas
            </option>
            <option value="BH">
              Bahrain
            </option>
            <option value="BD">
              Bangladesh
            </option>
            <option value="BB">
              Barbados
            </option>
            <option value="BY">
              Belarus
            </option>
            <option value="BE">
              Belgium
            </option>
            <option value="BZ">
              Belize
            </option>
            <option value="BJ">
              Benin
            </option>
            <option value="BM">
              Bermuda
            </option>
            <option value="BT">
              Bhutan
            </option>
            <option value="BO">
              Bolivia
            </option>
            <option value="BA">
              Bosnia and Herzegovina
            </option>
            <option value="BW">
              Botswana
            </option>
            <option value="BR">
              Brazil
            </option>
            <option value="VG">
              British Virgin Islands
            </option>
            <option value="IO">
              British Indian Ocean Territory
            </option>
            <option value="BN">
              Brunei
            </option>
            <option value="BG">
              Bulgaria
            </option>
            <option value="BF">
              Burkina Faso
            </option>
            <option value="BI">
              Burundi
            </option>
            <option value="KH">
              Cambodia
            </option>
            <option value="CM">
              Cameroon
            </option>
            <option value="CA">
              Canada
            </option>
            <option value="CV">
              Cape Verde
            </option>
            <option value="KY">
              Cayman Islands
            </option>
            <option value="CF">
              Central African Republic
            </option>
            <option value="TD">
              Chad
            </option>
            <option value="CL">
              Chile
            </option>
            <option value="CN">
              China
            </option>
            <option value="CX">
              Christmas Island
            </option>
            <option value="CO">
              Colombia
            </option>
            <option value="KM">
              Comoros Islands
            </option>
            <option value="CD">
              Congo, Democratic Republic of the
            </option>
            <option value="CG">
              Congo, Republic of the
            </option>
            <option value="CK">
              Cook Islands
            </option>
            <option value="CR">
              Costa Rica
            </option>
            <option value="CI">
              Cote D'ivoire
            </option>
            <option value="HR">
              Croatia
            </option>
            <option value="CU">
              Cuba
            </option>
            <option value="CY">
              Cyprus
            </option>
            <option value="CZ">
              Czech Republic
            </option>
            <option value="DK">
              Denmark
            </option>
            <option value="DJ">
              Djibouti
            </option>
            <option value="DM">
              Dominica
            </option>
            <option value="DO">
              Dominican Republic
            </option>
            <option value="TP">
              East Timor
            </option>
            <option value="EC">
              Ecuador
            </option>
            <option value="EG">
              Egypt
            </option>
            <option value="SV">
              El Salvador
            </option>
            <option value="GQ">
              Equatorial Guinea
            </option>
            <option value="ER">
              Eritrea
            </option>
            <option value="EE">
              Estonia
            </option>
            <option value="ET">
              Ethiopia
            </option>
            <option value="FK">
              Falkland Islands (Malvinas)
            </option>
            <option value="FO">
              Faroe Islands
            </option>
            <option value="FJ">
              Fiji
            </option>
            <option value="FI">
              Finland
            </option>
            <option value="FR">
              France
            </option>
            <option value="GF">
              French Guiana
            </option>
            <option value="PF">
              French Polynesia
            </option>
            <option value="TF">
              French Southern Territories
            </option>
            <option value="GA">
              Gabon
            </option>
            <option value="GM">
              Gambia
            </option>
            <option value="GE">
              Georgia
            </option>
            <option value="DE">
              Germany
            </option>
            <option value="GH">
              Ghana
            </option>
            <option value="GI">
              Gibraltar
            </option>
            <option value="GR">
              Greece
            </option>
            <option value="GL">
              Greenland
            </option>
            <option value="GD">
              Grenada
            </option>
            <option value="GP">
              Guadeloupe
            </option>
            <option value="GU">
              Guam
            </option>
            <option value="GT">
              Guatemala
            </option>
            <option value="GN">
              Guinea
            </option>
            <option value="GW">
              Guinea-Bissau
            </option>
            <option value="GY">
              Guyana
            </option>
            <option value="HT">
              Haiti
            </option>
            <option value="VA">
              Holy See (Vatican City State)
            </option>
            <option value="HN">
              Honduras
            </option>
            <option value="HK">
              Hong Kong
            </option>
            <option value="HU">
              Hungary
            </option>
            <option value="IS">
              Iceland
            </option>
            <option value="IN">
              India
            </option>
            <option value="ID">
              Indonesia
            </option>
            <option value="IR">
              Iran
            </option>
            <option value="IQ">
              Iraq
            </option>
            <option value="IE">
              Republic of Ireland
            </option>
            <option value="IL">
              Israel
            </option>
            <option value="IT">
              Italy
            </option>
            <option value="JM">
              Jamaica
            </option>
            <option value="JP">
              Japan
            </option>
            <option value="JO">
              Jordan
            </option>
            <option value="KZ">
              Kazakhstan
            </option>
            <option value="KE">
              Kenya
            </option>
            <option value="KI">
              Kiribati
            </option>
            <option value="KR">
              South Korea
            </option>
            <option value="XK">
              Kosovo
            </option>
            <option value="KW">
              Kuwait
            </option>
            <option value="KG">
              Kyrgyzstan
            </option>
            <option value="LA">
              Laos
            </option>
            <option value="LV">
              Latvia
            </option>
            <option value="LB">
              Lebanon
            </option>
            <option value="LS">
              Lesotho
            </option>
            <option value="LR">
              Liberia
            </option>
            <option value="LY">
              Libya
            </option>
            <option value="LI">
              Liechtenstein
            </option>
            <option value="LT">
              Lithuania
            </option>
            <option value="LU">
              Luxembourg
            </option>
            <option value="MO">
              Macau
            </option>
            <option value="MK">
              Macedonia
            </option>
            <option value="MG">
              Madagascar
            </option>
            <option value="MW">
              Malawi
            </option>
            <option value="MY">
              Malaysia
            </option>
            <option value="MV">
              Maldives
            </option>
            <option value="ML">
              Mali
            </option>
            <option value="MT">
              Malta
            </option>
            <option value="MH">
              Marshall Islands
            </option>
            <option value="MQ">
              Martinique
            </option>
            <option value="MR">
              Mauritania
            </option>
            <option value="MU">
              Mauritius
            </option>
            <option value="YT">
              Mayotte
            </option>
            <option value="MX">
              Mexico
            </option>
            <option value="FM">
              Micronesia
            </option>
            <option value="MD">
              Moldova, Republic of
            </option>
            <option value="MC">
              Monaco
            </option>
            <option value="MN">
              Mongolia
            </option>
            <option value="ME">
              Montenegro
            </option>
            <option value="MS">
              Montserrat
            </option>
            <option value="MA">
              Morocco
            </option>
            <option value="MZ">
              Mozambique
            </option>
            <option value="MM">
              Myanmar
            </option>
            <option value="NA">
              Namibia
            </option>
            <option value="NR">
              Nauru
            </option>
            <option value="NP">
              Nepal
            </option>
            <option value="NL">
              Netherlands
            </option>
            <option value="AN">
              Netherlands Antilles
            </option>
            <option value="NC">
              New Caledonia
            </option>
            <option value="NZ">
              New Zealand
            </option>
            <option value="NI">
              Nicaragua
            </option>
            <option value="NE">
              Niger
            </option>
            <option value="NG">
              Nigeria
            </option>
            <option value="NU">
              Niue
            </option>
            <option value="NF">
              Norfolk Island
            </option>
            <option value="MP">
              Northern Mariana Islands
            </option>
            <option value="NO">
              Norway
            </option>
            <option value="OM">
              Oman
            </option>
            <option value="PK">
              Pakistan
            </option>
            <option value="PW">
              Palau
            </option>
            <option value="PA">
              Panama
            </option>
            <option value="PG">
              Papua New Guinea
            </option>
            <option value="PY">
              Paraguay
            </option>
            <option value="PE">
              Peru
            </option>
            <option value="PH">
              Philippines
            </option>
            <option value="PN">
              Pitcairn Island
            </option>
            <option value="PL">
              Poland
            </option>
            <option value="PT">
              Portugal
            </option>
            <option value="PR">
              Puerto Rico
            </option>
            <option value="QA">
              Qatar
            </option>
            <option value="RE">
              Reunion
            </option>
            <option value="RO">
              Romania
            </option>
            <option value="RU">
              Russian Federation
            </option>
            <option value="RW">
              Rwanda
            </option>
            <option value="KN">
              Saint Kitts and Nevis
            </option>
            <option value="LC">
              Saint Lucia
            </option>
            <option value="VC">
              Saint Vincent and the Grenadines
            </option>
            <option value="WS">
              Samoa
            </option>
            <option value="SM">
              San Marino
            </option>
            <option value="ST">
              Sao Tome and Principe
            </option>
            <option value="SA">
              Saudi Arabia
            </option>
            <option value="SN">
              Senegal
            </option>
            <option value="RS">
              Serbia
            </option>
            <option value="SC">
              Seychelles
            </option>
            <option value="SL">
              Sierra Leone
            </option>
            <option value="SG">
              Singapore
            </option>
            <option value="SK">
              Slovakia
            </option>
            <option value="SI">
              Slovenia
            </option>
            <option value="SB">
              Solomon Islands
            </option>
            <option value="SO">
              Somalia
            </option>
            <option value="ZA">
              South Africa
            </option>
            <option value="SS">
              South Sudan
            </option>
            <option value="ES">
              Spain
            </option>
            <option value="LK">
              Sri Lanka
            </option>
            <option value="SH">
              St.Helena
            </option>
            <option value="PM">
              St.Pierre and Miquelon
            </option>
            <option value="SD">
              Sudan
            </option>
            <option value="SR">
              Suriname
            </option>
            <option value="SY">
              Syria
            </option>
            <option value="SZ">
              Swaziland
            </option>
            <option value="SE">
              Sweden
            </option>
            <option value="CH">
              Switzerland
            </option>
            <option value="TW">
              Taiwan
            </option>
            <option value="TJ">
              Tajikistan
            </option>
            <option value="TZ">
              Tanzania
            </option>
            <option value="TH">
              Thailand
            </option>
            <option value="TG">
              Togo
            </option>
            <option value="TK">
              Tokelau
            </option>
            <option value="TO">
              Tonga
            </option>
            <option value="TT">
              Trinidad and Tobago
            </option>
            <option value="TN">
              Tunisia
            </option>
            <option value="TR">
              Turkey
            </option>
            <option value="TM">
              Turkmenistan
            </option>
            <option value="TC">
              Turks and Caicos Islands
            </option>
            <option value="TV">
              Tuvalu
            </option>
            <option value="UG">
              Uganda
            </option>
            <option value="UA">
              Ukraine
            </option>
            <option value="AE">
              United Arab Emirates
            </option>
            <option value="GB">
              United Kingdom
            </option>
            <option value="UY">
              Uruguay
            </option>
            <option value="UZ">
              Uzbekistan
            </option>
            <option value="VU">
              Vanuatu
            </option>
            <option value="VE">
              Venezuela
            </option>
            <option value="VN">
              Viet Nam
            </option>
            <option value="VI">
              Virgin Islands (U.S.)
            </option>
            <option value="WF">
              Wallis and Futuna Islands
            </option>
            <option value="EH">
              Western Sahara
            </option>
            <option value="YE">
              Yemen
            </option>
            <option value="ZM">
              Zambia
            </option>
            <option value="ZW">
              Zimbabwe
            </option>
          </select>
          <input form={this.props.formName} type="text" className="input" name="name" ref="name" valueLink={this.linkState(`name`) } placeholder={this.context.intl.formatMessage({id: 'first_name'})}/>
          <input required="required" form={this.props.formName} type="email" className="input" ref="email" name="email" valueLink={this.linkState(`email`) } placeholder={this.context.intl.formatMessage({id: 'email_required'})}/>
          <div className="why">
            <FormattedHTMLMessage id="why_this_info"/>
          </div>
          <div className="checkboxDiv">
            <input id="privacyPolicy" form={this.props.formName} type="checkbox" required="required"/>
            <label htmlFor="privacyPolicy" className="label privacy-notice">
              <FormattedHTMLMessage id="privacy_notice"/>
            </label>
          </div>
          { this.state.didSignUp ? <button className="button" style={{ padding: "12px 17px" }}>{this.context.intl.formatMessage({id: 'thanks_for_signup'})}</button> : <button type="submit" form={this.props.formName} className="button button-groove">{submitButtonText}</button> }
        </form>
      </div>
    );
  }
});
