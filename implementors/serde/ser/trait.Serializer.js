(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a, W:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='trait std::io::Write'>Write</a>&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='trait serde::ser::Serializer'>Serializer</a> for <a class='struct' href='bincode/serde/struct.Serializer.html' title='struct bincode::serde::Serializer'>Serializer</a>&lt;'a, W&gt;",];
implementors["tantivy"] = ["impl&lt;'a, W&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='trait serde::ser::Serializer'>Serializer</a> for <a class='struct' href='bincode/serde/writer/struct.Serializer.html' title='struct bincode::serde::writer::Serializer'>Serializer</a>&lt;'a, W&gt; <span class='where fmt-newline'>where W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='trait std::io::Write'>Write</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
