class MessageMailer < ActionMailer::Base

  default from: "naderabouezze93@gmail.com"
  default to: "malekrifai.mr@gmail.com"

   layout "mailer"

   def new_message(message)
     @message = message

     mail subject: "Message from #{message.name}"
   end
end
