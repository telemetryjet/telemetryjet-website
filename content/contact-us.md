---
title: "Contact Us"
---

<form name="contact" method="POST" data-netlify="true">
    <div class="bp3-form-group">
        <label class="bp3-label" for="name-input">
            Your Name
            <span class="bp3-text-muted">(required)</span>
        </label>
        <div class="bp3-form-content">
            <div class="bp3-input-group">
                <span class="bp3-icon bp3-icon-person"></span>
                <input name="name" id="name-input" type="text" class="bp3-input bp3-fill" placeholder="John Doe" dir="auto" /> 
            </div>
        </div>
    </div>
    <div class="bp3-form-group">
        <label class="bp3-label" for="email-input">
            Your Email
            <span class="bp3-text-muted">(required)</span>
        </label>
        <div class="bp3-form-content">
            <div class="bp3-input-group">
                <span class="bp3-icon bp3-icon-envelope"></span>
                <input name="email" id="email-input" type="text" class="bp3-input bp3-fill" placeholder="johndoe@test.com" dir="auto" /> 
            </div>
        </div>
    </div>
    <div class="bp3-form-group">
        <label class="bp3-label" for="message-input">
            Message
            <span class="bp3-text-muted">(required)</span>
        </label>
        <div class="bp3-form-content">
            <div class="bp3-input-group">
                <textarea name="message" id="message-input" class="bp3-input bp3-fill" dir="auto"></textarea>
            </div>
        </div>
    </div>
    <p style="float: right;">
        <button class="bp3-button bp3-intent-primary bp3-icon-arrow-right" type="submit">Send Message</button>
    </p>
</form>